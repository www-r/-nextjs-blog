'use client';
import '@/animation/float.css';
import { ComponentProps } from 'react';
import Image, { StaticImageData } from 'next/image';

interface Props extends ComponentProps<'div'> {
	src: string | StaticImageData;
	size?: number;
	alt: string;
	animation?: boolean;
	onClick?: (event) => void;
}

export default function Icon({ src, size = 30, animation = false, ...props }: Props) {
	return (
		<div className={'flex items-center my-auto ' + props.className} onClick={props.onClick}>
			<Image
			
				src={src}
				alt={props.alt}
				height={size}
				width={size}
				style={{ objectFit: 'contain' }}
				className={` ${animation ? 'float' : ''}`}
			/>
		</div>
	);
}
