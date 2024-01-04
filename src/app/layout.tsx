import type { Metadata } from 'next';

import './globals.css';
import Header from '@components/Header';
import Footer from '@components/Footer';

export const metadata: Metadata = {
	title: "Kim Young En's Blog",
	description: '프론트엔드 개발자 김영은의 블로그입니다.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="ko">
			<body>
				<Header>Header</Header>
				<main className="text-3xl font-bold underline">{children}</main>
				<Footer>Footer</Footer>
			</body>
		</html>
	);
}
