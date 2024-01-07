import React from 'react';
import Image, { StaticImageData } from 'next/image';
interface Props {
	src: string | StaticImageData;
	size?: number;
	alt: string;
}

export default function Icon({ src, size = 30, alt }: Props) {
	return <Image src={src} alt={alt} height={size} width={size} style={{ objectFit: 'contain' }} />;
}
