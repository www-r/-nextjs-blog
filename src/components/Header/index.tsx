'use client';
import Link from 'next/link';
import Nav from '@components/Nav';
import { MY_NAME } from '@/constants';

import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

export default function Header() {

	return (
		<header className="header border-solid border-b-[0.1rem] inner flex-row--between items-center h-[7.8vw] max-h-[8rem] max-w-[160rem] fixed top-0 z-50 w-full bg-white ">
			<Link href="/">
				<h1 className="text-[1.6rem] sm:text-[2.7vw]  2xl:text-[4.36rem] font-extrabold">{MY_NAME}</h1>
			</Link>
			<Nav />
		</header>
	);
}
