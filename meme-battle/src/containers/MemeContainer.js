import React, { useEffect, Fragment, useReducer } from 'react';
import axios from 'axios';
import { mapKeys, get, map } from 'lodash';
import MemeCard from '../components/MemeCard';
import { API_URL } from '../constants';

function MemeContainer() {
	const initialState = {
		isFetching: false,
		memes: {
			A: {},
			B: {}
		}
	}

	const [state, setState] = useReducer(
		(state, newState) => ({ ...state, ...newState }),
		initialState,
	)

	async function getMemes() {
		try {
			setState({ isFetching: true });
			console.log(state.isFetching)
			const response = await axios.get(API_URL);
			const memes = get(response, ['data', 'data', 'memes'], null);
			const memesMap = mapKeys(memes, (val, key) => key)
			const randomMemeA = memesMap[Math.floor(Math.random() * 99)];
			const randomMemeB = memesMap[Math.floor(Math.random() * 99)];
			setState({ isFetching: false, memes: { A: randomMemeA, B: randomMemeB }});
		}
		catch (error) {
			console.log(error);
		}
	}

	useEffect(() => {
		getMemes();
	}, [])
	
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
						<button onClick={getMemes}>battle</button>
					</Fragment>
				)
			}
		
		</Fragment>
	);

}


export default MemeContainer;