import '@/animation/float.css';
import Image, { StaticImageData } from 'next/image';
interface Props {
	src: string | StaticImageData;
	size?: number;
	alt: string;
	animation?: boolean;
}

export default function Icon({ src, size = 30, animation = false, alt }: Props) {
	return (
		<div className="flex items-center my-auto">
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
