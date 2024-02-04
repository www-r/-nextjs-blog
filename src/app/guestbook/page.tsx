import Page from '@/components/common/Page';
import Section from '@/components/common/Section';
import GuestBook from '@/components/GuestBook';
import SubTitle from '@/components/common/Subtitle';

export default function GuestBookPage() {
	return (
		<Page className="bg-[url('/cover.png')] opacity-80">
			<SubTitle className="text-white">Guest Book</SubTitle>
			<Section border={false}>
				<GuestBook />
			</Section>
		</Page>
	);
}
