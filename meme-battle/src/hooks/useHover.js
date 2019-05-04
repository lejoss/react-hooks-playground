import { useEffect, useState, useRef } from 'react';

function useHover() {
	let [isHovering, setIsHovering] = useState(false);

	let ref = useRef(null);

	let handleMouseOver = () => setIsHovering(true);
	let handleMouseOut = () => setIsHovering(false);

	useEffect(() => {
		let el = ref.current;
		if (el) {
			el.addEventListener('mouseover', handleMouseOver);
			el.addEventListener('mouseout', handleMouseOut);

			return () => {
				el.removeEventListener('mouseover', handleMouseOver);
				el.removeEventListener('mouseout', handleMouseOut);
			};
		}
	});

	return [ref, isHovering];

}

export default useHover;