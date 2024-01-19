'use client';
import '@/animation/fadeSlide.css';
import './styles.css';
import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import Icon from '../Icon';
import { PROFILE_TEXT, BUTTON} from '@/constants';
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
					<div>{'image'}</div>
					<div className="text-4xl">
						{/* {PROFILE_TEXT.main.map((text, index) => (
							<p className="mb-8" key={randomNumber + index}>
								{text}
							</p>
						))} */}
						<p>{text}</p>
					</div>
				</div>
				<div className="inner w-full flex-row--evenly">
					<Button message={BUTTON.contact} type="contact" href='#contact'/>
					<Button message={BUTTON.resume} type="resume" href='https://www.canva.com/design/DAFqWZuH5C4/A_tOPzv6vXALk6UKqosuew/view?utm_content=DAFqWZuH5C4&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink'/>
					<Button message={BUTTON.letter} type="letter" href='https://www.canva.com/design/DAF3ANc0gTw/F-_8o3304Rur1YU7k7eXRQ/view?utm_content=DAF3ANc0gTw&utm_campaign=designshare&utm_medium=link&utm_source=editor'/>
				</div>
				<div className="flex">
					<Icon src={ArrowDown} alt="" animation size={50} />
				</div>
			</div>
		</section>
	);
}
