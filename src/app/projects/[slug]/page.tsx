import Page from '@/components/common/Page';
import Section from '@/components/common/Section';
import { getRepoReadMe, getMarkdownRaw } from '@/service/github';

export default async function PostPage() {
	const response = await getRepoReadMe('www-r', 'PortfolioSite');
	const data = await getMarkdownRaw(response);
	return (
		<Page>
			<Section className="">
				<div dangerouslySetInnerHTML={{ __html: data }}></div>
			</Section>
		</Page>
	);
}
