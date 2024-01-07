import Page from '@components/Page';
import PinnedProjects from '@/components/PinnedProjects';
import UnpinnedProjects from '@/components/UnpinnedProjects';
import ProfileIntro from '@components/ProfileIntro';
import Slider from '@components/Slider';
import Card from '@components/Card';

import { getPosts } from '@/service';

export default async function Home() {
	const allPosts = await getPosts();
	return (
		<Page>
			<ProfileIntro />
			<PinnedProjects allPosts={allPosts} />
			<UnpinnedProjects allPosts={allPosts} />
		</Page>
	);
}
