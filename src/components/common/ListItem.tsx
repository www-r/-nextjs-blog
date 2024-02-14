import React, { ComponentProps } from 'react';

interface Props extends ComponentProps<'li'> {}
export default function ListItem({ children, ...props }: Props) {
	return (
		<li
			{...props}
			className={
				'border-b-[transparent] border-solid px-5  hover:bg-white hover:border-b-black hover:cursor-pointer ' +
				props.className
			}
		>
			{children}
		</li>
	);
}
