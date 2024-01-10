import Page from '@components/Page';
import AboutCover from '@/components/AboutCover';
import AboutContent from '@/components/AboutContent';
import SubTitle from '@/components/SubTitle';

export default async function AboutPage() {
	return (
		<div className="bg-ivory">
			<Page>
				<SubTitle>About</SubTitle>
				<AboutCover />
				<AboutContent />
			</Page>
		</div>
	);
}
