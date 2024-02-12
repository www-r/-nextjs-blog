'use client';
import { ComponentProps, useContext } from 'react';
import { ModalStateContext, ModalMessageContext } from '@/context';
interface Props extends ComponentProps<'dialog'> {}

export default function Modal({}: Props) {
	const { state, setState } = useContext(ModalStateContext);
	const { message } = useContext(ModalMessageContext);

	return (
		<>
			<div
				style={state ? { display: 'block' } : { display: 'none' }}
				className="bg-[rgba(0,0,0,0.7)] inset-0 z-[9] fixed"
			></div>
			<dialog
				style={state ? { display: 'block' } : { display: 'none' }}
				className="fixed z-10 top-1/3 left-0 py-10 px-20 rounded-md "
			>
				<p className="text-md">{message}</p>
				<form action="">
					<button
						value="close"
						onClick={() => setState(false)}
						className="w-full border border-solid rounded-md my-3 mx-auto"
					>
						창 닫기
					</button>
				</form>
			</dialog>
		</>
	);
}
