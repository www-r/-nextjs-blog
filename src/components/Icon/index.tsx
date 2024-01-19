'use client';
import '@/animation/float.css';
import Image, { StaticImageData } from 'next/image';
interface Props {
	src: string | StaticImageData;
	size?: number;
	alt: string;
	animation?: boolean;
	onClick?: (event) => void;
}

export default function Icon({ src, size = 30, animation = false, alt, onClick }: Props) {
	return (
		<div className="flex items-center my-auto" onClick={onClick}>
			<Image
				src={src}
				alt={alt}
				height={size}
				width={size}
				style={{ objectFit: 'contain' }}
				className={animation ? 'float' : ''}
			/>
		</div>
	);
}
