import { ComponentProps } from 'react';

interface Props extends ComponentProps<'section'> {
	border?: boolean;
}

export default function Section({ children, border = true, id, className }: Props) {
	return (
		<section
			className={`py-[5rem] relative min-w-[105rem] ${border ? 'border-t border-solid border-black' : ''} ${className}`}
			id={id}
		>
			{children}
		</section>
	);
}
