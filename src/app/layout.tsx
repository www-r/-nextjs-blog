import type { Metadata } from 'next';
import { Suspense } from 'react';

import './globals.css';
import Header from '@components/Header';
import Footer from '@components/Footer';
import Loader from '@/components/Loader';

export const metadata: Metadata = {
	title: 'Kim Young En',
	description: '프론트엔드 개발자 김영은입니다.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="ko">
			<body className="max-w-[160rem] h-[100vh] flex-cols items-center mx-auto overflow-x-hidden">
				<Suspense fallback={<Loader />}>
					<Header />
					<main className="w-full">{children}</main>
					<Footer />
				</Suspense>
			</body>
		</html>
	);
}
