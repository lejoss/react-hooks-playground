import { useContext } from 'react';
import { CacheContext } from '../context/CacheContext';

function useCacheContext() {
	let context = useContext(CacheContext);
	if (!context) {
		// TODO: use error boundaries 
		throw new Error('are you trying to use this hook outside the provider\'s boundaries?')
	}

	return context;
}

export default useCacheContext;