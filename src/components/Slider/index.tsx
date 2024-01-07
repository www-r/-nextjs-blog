'use client';
import { Post } from '@/types';
import React, { PropsWithChildren } from 'react';

import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

interface Props extends PropsWithChildren {
	posts: Post[];
}

const responsive = {
	desktop: {
		breakpoint: { max: 3000, min: 1024 },
		items: 3,
		slidesToSlide: 3, // optional, default to 1.
	},
	tablet: {
		breakpoint: { max: 1024, min: 464 },
		items: 2,
		slidesToSlide: 2, // optional, default to 1.
	},
	mobile: {
		breakpoint: { max: 464, min: 0 },
		items: 1,
		slidesToSlide: 1, // optional, default to 1.
	},
};

export default function Slider({ posts }: Props) {
	return (
		<Carousel
			swipeable
			responsive={responsive}
			ssr // means to render carousel on server-side.
			infinite
			// autoPlay
			removeArrowOnDeviceType={['tablet', 'mobile']}
			containerClass="my-10"
			itemClass="center"
		>
			{children}
		</Carousel>
	);
}
