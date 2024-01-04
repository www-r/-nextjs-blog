import { PropsWithChildren } from 'react';

interface Props extends PropsWithChildren {}

export default function Footer({ children }: Props) {
	return <footer>{children}</footer>;
}
