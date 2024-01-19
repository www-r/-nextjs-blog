'use client';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import './styles.css';
export default function FlipCard({ children, img }) {
	const [isIconFront, setIsIconFront] = useState(true);
	function clickHandler(e) {
		console.log('clicked@');
		if (e.target.classList.contains('isFront')) {
			e.target.classList.remove('isFront');
		} else {
			e.target.classList.add('isFront');
		}
		setIsIconFront(!isIconFront);
	}
	return (
		<div className="container">
			{/* //front */}
			<div className={`flip-card front ${isIconFront ? 'isFront' : ''}`} onClick={(e) => clickHandler(e)}>
				<Image src={img} alt="" className="front-image" width={64} height={64} />
			</div>

			{/* //back */}
			<div className={`flip-card back ${isIconFront ? '' : 'isFront'}}`} onClick={(e) => clickHandler(e)}>
				<div>{children}</div>
			</div>
		</div>
	);
}
