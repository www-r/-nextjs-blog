import Link from 'next/link';
import Section from '@components/Section';
import SubTitle from '@components/SubTitle';

import { getFileUrlFromToggle, readJsonFile } from '@/service/data';
import { COLOR } from '@/constants';
export default async function ContactSection() {
	const fileUrl = await getFileUrlFromToggle('contact');
	const data = await readJsonFile(fileUrl);
	// console.log('data', data);
	return (
		<Section className="bg-green" id="contact">
			<SubTitle>Contact</SubTitle>
			<ul className="inner flex mt-[5rem]">
				{data[1]['value'].map((email: string) => (
					<Link href={`mailto:${email}`} key={email}>
						<li className="border-solid border-[0.2rem] mr-[3rem] mb-[2rem] bg-white  p-[1.5rem] w-[35rem]">
							<p className=" text-lg font-bold">{email}</p>
						</li>
					</Link>
				))}
			</ul>
		</Section>
	);
}
