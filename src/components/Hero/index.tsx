// 'use client';
// import { useState, useEffect } from 'react';
import Image from 'next/image';
import { PROFILE_TEXT } from '@/constants';
import HeroImage from '../../../images/hero.jpeg';

export default function Hero() {

	return (
		<section
			className="align-center pb-[4rem] transition-[height_1s_ease-in-out]"
			// style={{ height: `${scrollY < 100 ? '80vh' : '100%'}` }}
		>
			<Image
				src={HeroImage}
				alt=""
				className={`rounded-full overflow-hidden object-cover content-center `}
				width={400}
			/>
			<div className="text-[2rem] py-[2rem] ">
				{PROFILE_TEXT.main.map((item) => (
					<p className="text-center" key={item}>
						{item}
					</p>
				))}
			</div>
		</section>
	);
}
