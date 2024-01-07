// import { PropsWithChildren } from 'react';
import Link from 'next/link';
import Nav from '@components/Nav';
import { MY_NAME } from '@/constants';
// interface Props extends PropsWithChildren {}

export default function Header() {
	return (
		<header className="inner flex justify-between items-center h-[7.8vw] max-h-[8rem] fixed top-0 z-50 bg-[red] w-full">
			<Link href="/">
				<h1 className="text-[1.6rem] sm:text-[2.7vw] font-extrabold">{MY_NAME}</h1>
			</Link>
			<Nav />
		</header>
	);
}
