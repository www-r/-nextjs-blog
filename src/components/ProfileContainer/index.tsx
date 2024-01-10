import Image from 'next/image';
import { getFileUrlFromToggle, readJsonFile } from '@/service/data';
import { Profile } from '@/types';
import SubSubTitle from '@components/SubSubTitle';
import PostIt from '@components/PostIt';

export default async function ProfileContainer() {
	const fileUrl = await getFileUrlFromToggle('profile');
	const profileData = await readJsonFile(fileUrl);

	return (
		<div className="relative flex-cols items-center justify-center w-[40rem] h-[40rem]">
			<PostIt>
				<SubSubTitle>PROFILE</SubSubTitle>
				<ul className="flex-cols gap-5 ">
					{profileData?.map((item: Profile) => {
						return (
							<li key={item.key}>
								{item.key} : {item.value}
							</li>
						);
					})}
				</ul>
			</PostIt>
		</div>
	);
}
{
	/* <a href="https://kr.freepik.com/free-vector/pastel-yellow-notepaper-journal-sticker-vector_31068828.htm#query=%ED%8F%AC%EC%8A%A4%ED%8A%B8%EC%9E%87%20png&position=44&from_view=keyword&track=ais&uuid=f14e22ad-262f-4185-b623-f52e4e650ae3">작가 rawpixel.com</a> 출처 Freepik */
}
