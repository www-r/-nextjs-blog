import Page from '@/components/common/Page';
import Section from '@/components/common/Section';
import SubTitle from '@/components/common/Subtitle';
import ProjectsContent from '@components/ProjectsContent';
import { readProjectAllRows } from '@/service/supabase';

export default async function PostsPage() {
	const projectArr = await readProjectAllRows();
	return (
		<Page className="bg-blue">
			<Section>
				<SubTitle>Projects</SubTitle>
				<ProjectsContent projectArr={projectArr} />
			</Section>
		</Page>
	);
}
