import { useState, useEffect, useContext } from 'react';
import { CacheContext } from '../context/CacheContext';

function useSelectWinner() {
	let { cache, setCache } = useContext(CacheContext);
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
	},)

	return [isSelected, selectWinner];

}

export default useSelectWinner;