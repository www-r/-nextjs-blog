import type { Metadata } from 'next';
import { Suspense } from 'react';

import './globals.css';
import Header from '@/components/common/Header';
import Footer from '@/components/common/Footer';
import Loader from '@/components/common/Loader';

export const metadata: Metadata = {
	title: 'Kim Young En',
	description: '프론트엔드 개발자 김영은입니다.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="ko">
			<body className="max-w-[160rem] h-[100vh] flex-cols items-center mx-auto overflow-x-hidden relative">
				<Header />
				<Suspense fallback={<Loader />}>
					<main className="w-full">{children}</main>
				</Suspense>
				<Footer />
			</body>
		</html>
	);
}
