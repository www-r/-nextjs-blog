import React from 'react';
import { getPosts } from '@/service';
import Page from '@components/Page';
import Card from '@components/Card';

export default async function PostsPage() {
	const posts = await getPosts();
	return (
		<Page>
			<div>
				<ul className="flex flex-wrap gap-10">
					{posts.map((post) => (
						<li key={post.path}>
							<Card post={post} image=''/>
						</li>
					))}
				</ul>
			</div>
		</Page>
	);
}
