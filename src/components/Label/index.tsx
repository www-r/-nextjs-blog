'use client';
import { PropsWithChildren } from 'react';

interface Props extends PropsWithChildren {
	htmlFor: string;
}

export default function Label({ children, htmlFor }: Props) {
	return (
		<label className="mr-3 text-sm" htmlFor={htmlFor}>
			{children}
		</label>
	);
}
