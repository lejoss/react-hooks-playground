import { useState, useEffect } from 'react';
import { useCacheContext } from '../hooks';

function useSelectWinner() {
	let { cache, setCache } = useCacheContext();
	let [isSelected, setIsSelected] = useState(false);

	function selectWinner(meme) {
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
	}

	useEffect(() => {
		selectWinner();
	})

	return [isSelected, selectWinner];

}

export default useSelectWinner;