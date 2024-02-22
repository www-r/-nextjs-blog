'use client';
// import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Icon from '@/components/common/Icon';
import Button from '@/components/common/Button';
import { BUTTON } from '@/constants';
import ArrowDown from '@/assets/arrow-down.png';

export default function SiteCover() {
	// const [text, setText] = useState<string>('');

	return (
		<section className="min-h-[60rem] align-center py-[5rem] ">
			<div className="section-container w-full flex-cols items-center">
				<div className="min-h-[50rem] pt-14">
					<Image
						src="/cover.png"
						alt="Main Page Picture"
						width={1000}
						height={1000}
						style={{ objectFit: 'cover', objectPosition: 'center', height: 'auto', width: 'auto' }}
						priority
					/>
					{/* <div className="text-4xl">
						<p>{text}</p>
					</div> */}
				</div>
				<div className="inner w-full flex-row--evenly mt-10">
					<Link href="#contact">
						<Button message={BUTTON.contact} type="contact" />
					</Link>
				</div>
				<div className="flex">
					<Icon src={ArrowDown} alt="" animation size={30} />
				</div>
			</div>
		</section>
	);
}
