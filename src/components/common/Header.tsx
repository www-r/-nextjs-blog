'use client';
import Link from 'next/link';
import Nav from '@/components/common/Nav';
import { MY_NAME } from '@/constants';

export default function Header() {
	return (
		<header className="header  inner flex-row--between items-center h-[7.8vw] max-h-[8rem] max-w-[160rem] fixed top-0 z-50 w-full bg-white ">
			<Link href="/">
				<h1 className="text-md sm:text-[2.7vw]  2xl:text-2xl font-extrabold">{MY_NAME}</h1>
			</Link>
			<Nav />
		</header>
	);
}
