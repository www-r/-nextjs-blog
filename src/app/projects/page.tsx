import Page from '@/components/common/Page';
import SubTitle from '@/components/common/Subtitle';
import ProjectsContent from '@components/ProjectsContent';
import { readProjectAllRows } from '@/service/supabase';
// import ModalStateContextProvider from '@/components/common/Provider/ModalStateContextProvider';
// import ModalMessageContextProvider from '@/components/common/Provider/ModalMessageContextProvider';
export default async function PostsPage() {
	const projectArr = await readProjectAllRows();
	return (
		<Page className="bg-blue">
			<section>
				<SubTitle>Projects</SubTitle>
				<ProjectsContent projectArr={projectArr} />
			</section>
		</Page>
	);
}
