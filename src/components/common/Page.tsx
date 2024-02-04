'use client';
import { ComponentProps } from 'react';

interface Props extends ComponentProps<'div'> {}

export default function Page({ children, className }: Props) {
	return <div className={`pt-[15rem]  min-h-[85vh] ${className}`}>{children}</div>;
}
