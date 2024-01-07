import { PropsWithChildren } from 'react';
import Nav from '@components/Nav';
import Link from 'next/link';
interface Props extends PropsWithChildren {}

export default function Header({ children }: Props) {
	return (
		<header className="inner flex justify-between h-[10rem] w-full fixed top-0 z-50">
			<Link href="/">
				<h1 className="text-[3vw] font-extrabold">{children}</h1>
			</Link>
			<Nav />
		</header>
	);
}
