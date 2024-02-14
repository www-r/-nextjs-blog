import Link from 'next/link';
import Section from '@/components/common/Section';
import SubTitle from '@/components/common/Subtitle';

const EMAIL = {
	google: 'jessicak0828@gmail.com',
	naver: 'inmein@naver.com',
};

export default async function ContactSection() {
	const emailArr = [EMAIL.google, EMAIL.naver];
	return (
		<Section className="bg-green" id="contact">
			<SubTitle>Contact</SubTitle>
			<ul className="inner flex flex-wrap mt-20 pb-20">
				{emailArr.map((email: string) => (
					<Link href={`mailto:${email}`} key={email}>
						<li className="border-solid border-[0.15rem] mr-[3rem] mb-[2rem] bg-white  p-[1.5rem] w-[35rem]">
							<p className=" text-lg font-bold">{email}</p>
						</li>
					</Link>
				))}
			</ul>
		</Section>
	);
}
