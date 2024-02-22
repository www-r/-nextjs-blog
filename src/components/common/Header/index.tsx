'use client';
import './styles.css';
import Link from 'next/link';
import Nav from '@/components/common/Nav';
import useScroll from '@/hooks/useScroll';

const MY_NAME = 'Kim Young En';

export default function Header() {
	const [isDown] = useScroll();

	return (
		<header
			className={`header ${
				isDown ? 'down' : ''
			} inner flex-row--between items-center h-[7.8vw] max-h-[8rem] max-w-[160rem] fixed top-0 z-50 w-full bg-white transition-all `}
		>
			<Link
				href="/"
				onClick={() => {
					window.scrollTo(0, 0);
				}}
			>
				<h1 className="text-md sm:text-[2.7vw]  2xl:text-2xl font-extrabold">{MY_NAME}</h1>
			</Link>
			<Nav />
		</header>
	);
}
