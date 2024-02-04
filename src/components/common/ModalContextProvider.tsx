'use client';
import { createContext, useState } from 'react';

export default function ModalContextProvider() {
	const [isVisible, setIsVisible] = useState(false);
	const ModalContext = createContext(isVisible);
	return <ModalContext.Provider value={isVisible}>ModalContextProvider</ModalContext.Provider>;
}
