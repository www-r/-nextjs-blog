import Image from 'next/image';
import Page from '@components/Page';
import AboutCover from '@/components/AboutCover';
import AboutContent from '@/components/AboutContent';
import SubTitle from '@/components/SubTitle';
import FlipCard from '@/components/FlipCard';
import { Tomato, Books, Girl, Tiger, Graduation } from '@/assets';

export default async function AboutPage() {
	return (
		<div className="bg-ivory">
			<Page>
				<SubTitle>About</SubTitle>
				<div className="grid grid-cols-3 grid-rows-2 inner gap-y-8 p-8">
					<FlipCard img={Girl}>
						<Image src={''} alt="" />
					</FlipCard>
					<FlipCard img={Tiger}>dd</FlipCard>
					<div></div>
					<FlipCard img={Books}>dd</FlipCard>
					<FlipCard img={Graduation}>dd</FlipCard>
					<FlipCard img={Tiger}>dd</FlipCard>

					{/* <FlipCard></FlipCard>
					<FlipCard></FlipCard>
					<FlipCard></FlipCard>
					<FlipCard></FlipCard> */}
				</div>
			</Page>
		</div>
	);
}
