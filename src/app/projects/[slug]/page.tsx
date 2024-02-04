'use client';
import { usePathname } from 'next/navigation';
import Page from '@/components/common/Page';
import Section from '@/components/common/Section';
import ProjectSection from '@/components/ProjectSection';

export default function PostPage() {
	const pathname = usePathname();
	const githubRepo = pathname.replace('/projects/', '');
	return (
		<Page className="bg-blue">
			<Section border={false}>
				<ProjectSection github={githubRepo} />
			</Section>
		</Page>
	);
}
