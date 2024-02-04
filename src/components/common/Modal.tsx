'use client';
import { ComponentProps, useContext } from 'react';
import { ModalStateContext, ModalMessageContext } from '@/context';
interface Props extends ComponentProps<'dialog'> {}

export default function Modal({}: Props) {
	const { state, setState } = useContext(ModalStateContext);
	const { message } = useContext(ModalMessageContext);

	return (
		<dialog style={state ? { display: 'block' } : { display: 'none' }}>
			<p>{message}</p>
			<form action="">
				<button value="close" onClick={() => setState(false)}>
					창 닫기
				</button>
			</form>
		</dialog>
	);
}
