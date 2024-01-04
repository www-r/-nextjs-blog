import { PropsWithChildren } from 'react';
import Nav from '@components/Nav';

interface Props extends PropsWithChildren {}

export default function Header({ children }: Props) {
	return (
		<header className="flex justify-between h-[10rem] items-center">
			<p>{children}</p>
			<Nav />
		</header>
	);
}
