import Image from 'next/image';
import Link from 'next/link';
import { PropsWithChildren } from 'react';


export default function ProjectCard({ post}: Props) {
	return (
		<Link href={`/posts/${post.path}`}>
			<div className="grid grid-rows-[3fr_2fr]">
				<div>
					<Image src={''} alt={post?.title} style={{ objectFit: 'contain' }} />
				</div>
				<div>
					<p>{post?.date}</p>
					<h4>{post?.title}</h4>
					<p className="card-body">{post?.description}</p>
				</div>
			</div>
		</Link>
	);
}
