import { PropsWithChildren } from 'react';

interface Props extends PropsWithChildren {}
export default function SubTitle({ children }: Props) {
	return (
		<h2 className="inner text-[2.5rem] font-extrabold pt-4 pb-4 border-solid border-b-[0.1rem] w-[90%] text-start relative">
			{children}
		</h2>
	);
}
