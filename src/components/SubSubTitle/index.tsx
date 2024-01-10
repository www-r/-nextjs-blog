import { PropsWithChildren } from 'react';

interface Props extends PropsWithChildren {}

export default function SubSubTitle({ children }: Props) {
	return (
		<h4 className="font-bold text-3xl mb-10 pb-1 ">
			<span className="border-b-[0.3rem] border-solid ">{children}</span>
		</h4>
	);
}
