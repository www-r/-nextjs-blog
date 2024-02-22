'use client';
import { useState, useEffect } from 'react';

const useWindow = () => {
	const [isWindow, setIsWindow] = useState(false);

	useEffect(() => {
		if (typeof window !== undefined) {
			setIsWindow(true);
		}
	}, [isWindow]);
	return [isWindow];
};

export default useWindow;
