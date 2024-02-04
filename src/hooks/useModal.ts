'use client';
import { useContext } from 'react';
import { ModalMessageContext, ModalStateContext } from '@/context';
const useModal = () => {
	const { setState } = useContext(ModalStateContext);
	const { setMessage } = useContext(ModalMessageContext);
	return [setState, setMessage];
};
export default useModal;
