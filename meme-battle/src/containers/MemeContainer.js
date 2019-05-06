import React, { Fragment } from 'react';
import { map } from 'lodash';
import MemeCard from '../components/MemeCard';
import { API_URL } from '../constants';
import { useFetchMemes } from '../hooks';

function MemeContainer() {
	let [state, fetchMemes] = useFetchMemes(API_URL);
	return (
		<Fragment>
			{state.error
				? <p>something wrong happened, call batman!</p>
				: state.isFetching
					? <p>...loading</p>
					: (
						<Fragment>
							<div className="App-main">
								{map(state.memes, (meme, key) => <MemeCard key={key} meme={meme} />)}
							</div>
							<br	/>
							<button onClick={fetchMemes}>battle</button>	
						</Fragment>
					)
			}
		</Fragment>
	);

}

export default MemeContainer;
