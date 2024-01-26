'use client';
import Link from 'next/link';
import './styles.css';
import { ComponentProps } from 'react';

interface Props extends Omit<ComponentProps<'button'>, 'type'> {
	message?: {
		en: string;
		ko: string;
	};
	href?: string;
	type?: 'contact' | 'resume' | 'letter';
}

export default function Button({ message, href, type, ...props }: Props) {
	return (
		<>
			{props.onClick ? (
				<button
					className={`${props.className} px-3 py-1 bg-transparent border-b border-solid  hover:bg-white`}
					onClick={props.onClick}
				>
					{props.children}
				</button>
			) : (
				<Link href={href}>
					<button
						type="button"
						className={`button ${type} min-w-[18rem] w-[24vw] mb-[1.6rem] py-3 border border-solid rounded-none ${props.className}`}
					>
						<p className="text-lg font-header">{message.en}</p>
						<p className="text-xs  ">{message.ko}</p>
						{props.children}
					</button>
				</Link>
			)}
		</>
	);
}
