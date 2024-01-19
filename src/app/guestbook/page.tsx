import Section from '@/components/Section';
import GuestBook from '@/components/GuestBook';

export default function GuestBookPage() {
	return (
		<div className="min-h-[85vh]">
			<Section bgColor="#fff" border={false}>
				<GuestBook />
			</Section>
		</div>
	);
}
