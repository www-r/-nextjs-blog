"use client"
import { useState } from 'react';
import { ModalStateContext } from '@/context';

export default function ModalStateContextProvider({ children }) {
	const [state, setState] = useState();
	return <ModalStateContext.Provider value={{ state, setState }}>{children}</ModalStateContext.Provider>;
}
