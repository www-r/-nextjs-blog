'use client';
import { useState } from 'react';
import { ModalMessageContext } from '@/context';
export default function ModalMessageContextProvider({ children }) {
	const [message, setMessage] = useState('');
	return <ModalMessageContext.Provider value={{ message, setMessage }}>{children}</ModalMessageContext.Provider>;
}
