import Page from '@components/Page';
import SubTitle from '@components/SubTitle';
import ProjectsContent from '@components/ProjectsContent';
import { getUploadedProjectsTitle, createProjectDataArr } from '@/service/data';

export default async function PostsPage() {
	const totalTitleArr = await getUploadedProjectsTitle();
	const totalProjectDataArr = await createProjectDataArr(totalTitleArr);
	return (
		<Page className="bg-blue">
			<section>
				<SubTitle>Projects</SubTitle>
				<ProjectsContent projectArr={totalProjectDataArr} />
			</section>
		</Page>
	);
}
