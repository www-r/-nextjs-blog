import Page from '@/components/common/Page';
import SiteCover from '@/components/SiteCover';
import SliderSection from '@components/SliderSection';
import ContactSection from '@/components/ContactSection';
export default async function Home() {
	return (
		<div className="bg-white">
			<Page>
				<SiteCover />
				<SliderSection />
				<ContactSection />
			</Page>
		</div>
	);
}
