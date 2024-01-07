import path from 'path';
import { readFile } from 'fs/promises';
import { Post } from '@/types';

export async function getProfileImage() {
	const filePath = path.join(process.cwd(), 'images', 'profile.png');
	console.log('filePath: ', filePath);
	const data = await readFile(filePath, { encoding: 'utf-8' });
}

export async function getPosts(): Promise<Post[]> {
	const filePath = path.join(process.cwd(), 'data', 'posts.json');
	const data = await readFile(filePath, { encoding: 'utf-8' });
	return JSON.parse(data);
}

export async function getFeaturedPosts(): Promise<Post[]> {
	const featuredPosts = await getPosts().then((posts) => posts.filter((post) => post.featured));
	return featuredPosts;
}
