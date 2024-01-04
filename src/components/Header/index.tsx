import { PropsWithChildren } from 'react';
import Nav from '@components/Nav';

interface Props extends PropsWithChildren {}

export default function Header({ children }: Props) {
	return (
		<header>
			<p>{children}</p>
			<Nav />
		</header>
	);
}
