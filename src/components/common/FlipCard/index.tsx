'use client';
import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import './styles.css';

export default function FlipCard({ children, img, front = 'icon', title = '' }) {
	function clickHandler(e) {
		e.target.closest('.container').classList.contains('rotate')
			? e.target.closest('.container').classList.remove('rotate')
			: e.target.classList.add('rotate');
		// console.log(e.target.closest('.container'));
	}
	return (
		<div className="container text-md font-medium" onClick={(e) => clickHandler(e)}>
			<div className="card-wrapper">
				{/* //front */}
				<div className={`flip-card front`}>
					{front === 'icon' ? (
						<Image src={img} alt="" className="front-icon" width={70} height={70} />
					) : (
						<Image src={img} alt="" className="front-image" width={500} height={600} />
					)}
				</div>
				{/* //back */}
				<div className={`flip-card back`}>
					{title && <h5>{title}</h5>}
					<div className="content">{children}</div>
				</div>
			</div>
		</div>
	);
}
