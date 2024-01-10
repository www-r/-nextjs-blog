import Image from 'next/image';
import { getFileUrlFromToggle } from '@/service/data';
import { PROFILE_TEXT } from '@/constants';

export default async function AboutCover() {
	const fileUrl = await getFileUrlFromToggle('image');
	const randomNumber = Math.random();
	return (
		<section>
			{/* <div>
				<Image
					src={fileUrl}
					alt="Picture of Kim Young En"
					className={`rounded-full overflow-hidden object-cover content-center mx-auto my-10`}
					width={400}
					height={400}
				/>
			</div> */}
			{/* <div className="inner flex-cols ">
				{PROFILE_TEXT.about.map((text, index) => (
					<p key={index + randomNumber}>{text}</p>
				))}
			</div> */}
		</section>
	);
}
