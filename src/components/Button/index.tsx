import { PropsWithChildren } from 'react';

interface Props extends PropsWithChildren {
	className?: string;
}

export default function Button({ children, className = '' }: Props) {
	return <button type='button' className={className}>{children}</button>;
}
