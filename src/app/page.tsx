import Page from '@components/Page';
import Hero from '@components/Hero';
import SliderSection from '@components/SliderSection';
export default async function Home() {
	return (
		<div className="bg-orange">
			<Page>
				<Hero />
				<SliderSection />
			</Page>
		</div>
	);
}
