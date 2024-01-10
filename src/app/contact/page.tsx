import Page from '@components/Page';
import SubTitle from '@components/SubTitle';

import { getFileUrlFromToggle, readJsonFile } from '@/service/data';

export default async function ContactPage() {
	const fileUrl = await getFileUrlFromToggle('contact');
	const data = await readJsonFile(fileUrl);
	console.log('data', data);
	return (
		<section className="inner bg-green ">
			<Page>
				<SubTitle>Contact</SubTitle>
				<ul className="inner flex mt-[5rem]">
					{data[1]['value'].map((email) => (
						<li key={email} className="border-solid border-[0.2rem] mr-[3rem] mb-[2rem] bg-white  p-[1.5rem] w-[35rem]">
							<p className=" text-[2rem] font-bold">{email}</p>
						</li>
					))}
				</ul>
			</Page>
		</section>
	);
}
