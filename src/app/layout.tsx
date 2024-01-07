import type { Metadata } from 'next';

import './globals.css';
import Header from '@components/Header';
import Footer from '@components/Footer';

export const metadata: Metadata = {
	title: "Kim Young En",
	description: '프론트엔드 개발자 김영은입니다.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="ko">
			<body className="max-w-[400rem] flex-cols items-center mx-auto overflow-x-hidden">
				<Header />
				<main>{children}</main>
				<Footer>Footer</Footer>
			</body>
		</html>
	);
}
