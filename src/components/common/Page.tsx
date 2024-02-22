'use client';
import { ComponentProps } from 'react';

interface Props extends ComponentProps<'div'> {}

export default function Page({ children, className }: Props) {
	return <div className={`  min-h-[100vh] ${className}`}>{children}</div>;
}
