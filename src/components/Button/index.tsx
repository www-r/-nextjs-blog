'use client';
import './styles.css';
import { ComponentProps } from 'react';

interface Props extends Omit<ComponentProps<'button'>, 'type'> {
	message?: {
		en: string;
		ko: string;
	};
	type?: 'contact' | 'resume' | 'letter';
}

export default function Button({ message, type, ...props }: Props) {
	return (
		<>
			{!message ? (
				<button
					className={`${props.className} px-3 py-1 bg-transparent border-b border-solid  hover:bg-white`}
					onClick={props.onClick}
				>
					{props.children}
				</button>
			) : (
				<button
					type="button"
					className={`button ${type} mb-[1.6rem] mx-10 py-3 px-[7rem] border border-solid rounded-none ${props.className}`}
				>
					<p className="text-lg font-header">{message.en}</p>
					<p className="text-xs  ">{message.ko}</p>
					{props.children}
				</button>
			)}
		</>
	);
}
