import { PropsWithChildren } from 'react';
import Image from 'next/image';
import PostItImg from '@/assets/postit.png';

interface Props extends PropsWithChildren {}

export default function PostIt({ children }: Props) {
	return (
		<div className="relative flex-cols items-center justify-center w-[40rem] h-[40rem] hover:translate-x-1 hover:-translate-y-1">
			<Image src={PostItImg} alt="" className="absolute top-0 shrink-0 " width={400} />
			<div className="w-[30rem] h-[20rem] flex-cols px-10">{children}</div>
		</div>
	);
}
