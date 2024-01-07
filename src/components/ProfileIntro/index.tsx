'use client';
import { usePathname } from 'next/navigation';

import Link from 'next/link';
import { PropsWithChildren } from 'react';
import Image from 'next/image';
import Button from '@components/Button';
// import { getProfileImage } from '@/service';
import profileImage from '../../../images/profile.jpeg';

interface Props extends PropsWithChildren {
	width?: number;
}

export default function ProfileIntro({ width = 400 }: Props) {
	const pathname = usePathname();

	return (
		<section className="align-center">
			<Image src={profileImage} alt="Profile" width={width} className={`circle w-[${width}px] h-[${width}px]`} />
			{pathname !== '/about' && (
				<div className="text-[2rem] p-[1.25rem_0_0_0]">
					<p>Hi, I am YoungEn Kim</p>
					<p>Front-End Developer</p>
				</div>
			)}
			<div>
				<Link href="/contact">
					<Button className="button bg-[green] text-[1.5rem] ">Contact me</Button>
				</Link>
				<Link href="https://www.canva.com/design/DAFqWZuH5C4/A_tOPzv6vXALk6UKqosuew/view?utm_content=DAFqWZuH5C4&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink">
					<Button className="button bg-[green] text-[1.5rem] ">check Resume</Button>
				</Link>
				<Link href="https://www.canva.com/design/DAF3ANc0gTw/F-_8o3304Rur1YU7k7eXRQ/view?utm_content=DAF3ANc0gTw&utm_campaign=designshare&utm_medium=link&utm_source=editor">
					<Button className="button bg-[green] text-[1.5rem] ">check Cover Letter</Button>
				</Link>
			</div>
		</section>
	);
}
