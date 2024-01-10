import { PropsWithChildren } from 'react';
interface Props extends PropsWithChildren {}

export default function Page({ children }: Props) {
	return <div className="pt-[20rem]  min-h-[85vh]">{children}</div>;
}
