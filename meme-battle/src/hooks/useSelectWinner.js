import { useState, useEffect, useCallback } from 'react';
import { useCacheContext } from '../hooks';


function useSelectWinner() {
	let { cache, setCache } = useCacheContext();
	let [isSelected, setIsSelected] = useState(false);

	const selectWinner = useCallback((meme) => {
		if (meme && cache) {
			let newCache = {
				...cache,
				winners: {
					...cache.winners,
					[meme.id]: meme
				}
			}
			setCache(newCache);
			setIsSelected(true);
		}
	}, [cache, setCache])

	useEffect(() => {
		selectWinner();
	}, [selectWinner])

	return [isSelected, selectWinner];

}

export default useSelectWinner;