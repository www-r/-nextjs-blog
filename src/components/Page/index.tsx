import { ReactNode } from 'react';

export default function Page({ children }: { children: ReactNode }) {
	return <div className="mt-[10rem]">{children}</div>;
}
