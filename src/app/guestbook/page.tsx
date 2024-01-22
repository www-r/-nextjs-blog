import Page from '@/components/Page';
import Section from '@/components/Section';
import GuestBook from '@/components/GuestBook';
import SubTitle from '@/components/SubTitle';

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
