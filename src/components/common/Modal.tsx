'use client';
import { ComponentProps, useEffect, useState } from 'react';
interface Props extends ComponentProps<'dialog'> {}
export default function Modal({ children, ...props }: Props) {
	const [isVisible, setIsVisible] = useState(false);

	useEffect(() => {
		const button = document.querySelector('button');
		const dialog = document.querySelector('dialog');
		button.addEventListener('close', () => {
			setIsVisible(false);
		});
	}, []);
	return (
		<dialog {...props}>
			{children}
			<form action="">
				<button value="close" style={isVisible ? { display: 'block' } : { display: 'none' }}>
					창 닫기
				</button>
			</form>
		</dialog>
	);
}
