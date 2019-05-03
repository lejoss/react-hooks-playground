import React, { useEffect, Fragment, useReducer } from 'react';
import axios from 'axios';
import { mapKeys, get, map } from 'lodash';
import MemeCard from '../components/MemeCard';
import { API_URL } from '../constants';

function useFetchMemes(url) {
	const initialState = {
		isFetching: false,
		memes: {
			A: {},
			B: {}
		}
	}
	const [state, setState] = useReducer(
		(state, newState) => ({ ...state, ...newState }),
		initialState
	);

	async function fetchMemes() {
		try {
			setState({ isFetching: true });
			const response = await axios.get(url);
			const data = get(response, ['data', 'data', 'memes'], null);
			const memes = mapKeys(data, (val, key) => key)
			const randomA = memes[Math.floor(Math.random() * 99)];
			const randomB = memes[Math.floor(Math.random() * 99)];
			setState({ isFetching: false, memes: { A: randomA, B: randomB }});

		} catch (error) {
			setState({ isFetching: false });
		}
	}
	useEffect(() => {
		fetchMemes();
	}, [])
	
	return [state, fetchMemes];
}

function MemeContainer() {
	const [state, fetchMemes] = useFetchMemes(API_URL);
	return (
		<Fragment>
			{state.isFetching
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