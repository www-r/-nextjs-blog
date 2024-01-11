'use client';
import '@/animation/fadeSlide.css';
import './styles.css';
import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import Icon from '../Icon';
import { PROFILE_TEXT } from '@/constants';
import ArrowDown from '@/assets/arrow-down.png';

export default function SiteCover() {
	const randomNumber = Math.random();

	const [text, setText] = useState<string>('');

	// for (let i = 0; i < PROFILE_TEXT.main.length; i++) {
	// 	console.log(text);
	// 	setText(text + PROFILE_TEXT.main.charAt(i));
	// }
	console.log(PROFILE_TEXT.main.charAt(0));
	return (
		<section className="section align-center pb-[4rem] transition-[height_1s_ease-in-out]">
			<div className="section-container">
				<div className="grid grid-cols-2">
					<div>{'image'}</div>
					<div className="text-biggest">
						{/* {PROFILE_TEXT.main.map((text, index) => (
							<p className="mb-8" key={randomNumber + index}>
								{text}
							</p>
						))} */}
						<p>{text}</p>
					</div>
				</div>
				<div className="flex">
					<Icon src={ArrowDown} alt="" animation size={50} />
				</div>
			</div>
		</section>
	);
}
