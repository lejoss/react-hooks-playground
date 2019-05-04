import { useReducer, useEffect } from 'react';

function useCache() {
  let initialState = { winners: {}};

	const [cache, setCache] = useReducer(
		(state, newState) => ({ ...state, ...newState }),
		initialState
	);

  useEffect(() => {
    setCache()
  }, [])

  return [cache, setCache]
}

export default useCache;
