import { ComponentProps } from 'react';

interface Props extends ComponentProps<'h2'> {}
export default function SubTitle({ children, className }: Props) {
	return (
		<h2
			className={`inner text-[2.5rem] font-extrabold pt-4 pb-4 border-solid border-b-[0.1rem] w-[90%] text-start relative ${className}`}
		>
			{children}
		</h2>
	);
}
