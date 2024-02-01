import Page from '@/components/Page';
import Section from '@/components/Section';
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
