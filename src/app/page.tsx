import Page from '@components/Page';
import SiteCover from '@/components/SiteCover';
import SliderSection from '@components/SliderSection';
export default async function Home() {
	return (
		<div className="bg-orange">
			<Page>
				<SiteCover />
				<SliderSection />
			</Page>
		</div>
	);
}
