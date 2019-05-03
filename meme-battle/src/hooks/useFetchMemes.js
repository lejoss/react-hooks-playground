import { useEffect, useReducer } from 'react';
import axios from 'axios';
import { mapKeys, get } from 'lodash';

export default function useFetchMemes(url) {
	const initialState = {
		isFetching: false,
		memes: {
			A: {},
			B: {}
		},
		error: false,
	}
	const [state, setState] = useReducer(
		(state, newState) => ({ ...state, ...newState }),
		initialState
	);

	function getRandomMeme(memes) {
		return memes[Math.floor(Math.random() * 99)];
	}

	async function fetchMemes() {
		try {
			setState({ isFetching: true });
			const response = await axios.get(url);
			const data = get(response, ['data', 'data', 'memes'], null);
			const memes = mapKeys(data, (val, key) => key)
			const A = getRandomMeme(memes);
			const B = getRandomMeme(memes);
			setState({ isFetching: false, memes: { A, B } });

		} catch (error) {
			setState({ isFetching: false, error: true });
		}
	}
	useEffect(() => {
		fetchMemes();
	}, [])
	
	return [state, fetchMemes];
}
