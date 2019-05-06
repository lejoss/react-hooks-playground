import { useReducer } from 'react';

function useCache() {
  let initialState = { winners: {}};

	const [cache, setCache] = useReducer(
		(state, newState) => ({ ...state, ...newState }),
		initialState
  );

  return [cache, setCache]
}

export default useCache;
