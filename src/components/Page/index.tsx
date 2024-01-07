import { ReactNode } from 'react';

export default function Page({ children }: { children: ReactNode }) {
	return <div className="inner w-[100vw] h-[100vh] mt-[10rem] overflow-auto">{children}</div>;
}
