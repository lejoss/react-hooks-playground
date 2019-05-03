import React from 'react';

const MemeCard = ({ meme }) => (
	<div style={{ border: '1px solid #282c34', width: 350, height: '100%', margin: '0 5px' }}>
		<img style={{ height: 250, width: '100%', minHeight: 250 }} src={meme.url} alt="placeholder"/>
		<p>{meme.name}</p>
	</div>
)
export default MemeCard;
