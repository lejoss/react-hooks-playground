import React from 'react';
import { useSelectWinner, useHover } from '../hooks';

function MemeCard({ meme }) {
	let	[ref, isHovering] = useHover();
	let [isSelected, selectWinner] = useSelectWinner();

	function onClick() {
		return selectWinner(meme);
	}
	return (
		<div ref={ref} onClick={onClick} style={{ backgroundColor: isSelected ? '#8EFFC1' : 'transparent', cursor: (isHovering || isSelected) ? 'pointer' : 'cursor', opacity: isHovering ? '0.5' : 1 ,border: '1px solid #282c34', width: 350, height: '100%', margin: '0 5px' }}>
			<img style={{ height: 250, width: '100%', minHeight: 250 }} src={meme.url} alt="placeholder"/>
			<p>{meme.name}</p>
		</div>
	)
}
export default MemeCard;
