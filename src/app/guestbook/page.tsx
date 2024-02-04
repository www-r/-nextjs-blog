import Page from '@/components/common/Page';
import Section from '@/components/common/Section';
import GuestBook from '@/components/GuestBook';
import SubTitle from '@/components/common/Subtitle';
import Modal from '@/components/common/Modal';
import ModalStateContextProvider from '@/components/common/Provider/ModalStateContextProvider';
import ModalMessageContextProvider from '@/components/common/Provider/ModalMessageContextProvider';

export default function GuestBookPage() {
	return (
		<ModalStateContextProvider>
			<ModalMessageContextProvider>
				<Page className="bg-[url('/cover.png')] opacity-80">
					<SubTitle className="text-white">Guest Book</SubTitle>
					<Section border={false}>
						<GuestBook />
						<Modal />
					</Section>
				</Page>
			</ModalMessageContextProvider>
		</ModalStateContextProvider>
	);
}
