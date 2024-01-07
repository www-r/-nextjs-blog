import Page from '@components/Page';
import ProfileIntro from '@components/ProfileIntro';
import ProfileMain from '@components/ProfileMain';
export default function AboutPage() {
	return (
		<Page>
			<ProfileIntro width={300} />
			<ProfileMain />
		</Page>
	);
}
