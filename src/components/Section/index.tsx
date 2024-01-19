import { PropsWithChildren } from 'react';

interface Props extends PropsWithChildren {
	bgColor: string;
	border?: boolean;
	id?: string;
}

export default function Section({ children, bgColor, border = true, id }: Props) {
	return (
		<section
			style={{ backgroundColor: `${bgColor}` }}
			className={`py-[5rem] ${border ? 'border-t border-solid border-black' : ''}`}
			id={id}
		>
			{children}
		</section>
	);
}
