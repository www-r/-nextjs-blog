import React from 'react';
import { getPosts } from '@/service';
import Page from '@components/Page';
import ProjectCard from '@/components/ProjectCard';

export default async function PostsPage() {
	const posts = await getPosts();
	return (
		<Page>
			<div>
				<ul className="flex flex-wrap gap-10">
					{posts.map((post) => (
						<li key={post.path}>
							<ProjectCard post={post} image="" />
						</li>
					))}
				</ul>
			</div>
		</Page>
	);
}
