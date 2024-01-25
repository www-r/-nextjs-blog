'use client';
import '@/animation/fadeSlide.css';
import './styles.css';
import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import Icon from '../Icon';
import { BUTTON, URL } from '@/constants';
import ArrowDown from '@/assets/arrow-down.png';
import Button from '@components/Button';
export default function SiteCover() {
	const randomNumber = Math.random();

	const [text, setText] = useState<string>('');

	// for (let i = 0; i < PROFILE_TEXT.main.length; i++) {
	// 	console.log(text);
	// 	setText(text + PROFILE_TEXT.main.charAt(i));
	// }

	return (
		<section className="section h-[50vw] min-h-[60rem] align-center pb-[4rem] transition-[height_1s_ease-in-out]">
			<div className="section-container w-full flex-cols items-center">
				<div className="">
					<Image
						src="/cover.png"
						alt="Main Page Picture"
						width={1000}
						height={300}
						style={{ objectFit: 'cover', objectPosition: 'center' }}
						priority
					/>
					<div className="text-4xl">
						<p>{text}</p>
					</div>
				</div>
				<div className="inner w-full flex-row--evenly mt-10">
					<Button message={BUTTON.contact} type="contact" href="#contact" />
					<Button message={BUTTON.resume} type="resume" href={''} />
					<Button message={BUTTON.letter} type="letter" href={''} />
				</div>
				<div className="flex">
					<Icon src={ArrowDown} alt="" animation size={50} />
				</div>
			</div>
		</section>
	);
}
