'use client';
import { useState, useEffect } from 'react';
// import useWindow from './useWindow';

const useScroll = () => {
	// const [isWindow] = useWindow();
	const [position, setPosition] = useState<number>(0);
	const [isDown, setIsDown] = useState<boolean>(false);

	useEffect(() => {
		const scrollHandler = () => {
			const currentPosition = window.scrollY;
			// 스크롤 방향 아래일 때
			if (position < currentPosition) {
				setIsDown(true); // isDown(position < currentPosition)
			} else {
				setIsDown(false);
			}
			setPosition(currentPosition);
		};

		window.addEventListener('scroll', () => scrollHandler());
		return () => {
			window.removeEventListener('scroll', () => scrollHandler());
		};
	}, []);
	return [isDown];
};

export default useScroll;
