import SubSubTitle from '@components/SubSubTitle';
import PostIt from '@components/PostIt';
import { getFileUrlFromToggle, readJsonFile } from '@/service/data';
import { Education } from '@/types';
export default async function EducationContainer() {
	const fileUrl = await getFileUrlFromToggle('education');
	const data = await readJsonFile(fileUrl);

	return (
		<div>
			<PostIt>
				<SubSubTitle>EDUCATION</SubSubTitle>
				<ul className="flex-cols gap-5">
					{data.map((item: Education) => (
						<li key={item.name} className="flex-cols gap-1">
							<h4>{item.name}</h4>
							<p className="flex gap-5 text-sm">
								<span>{item.when}</span>
								<span>{item.finished ? '수료' : '중퇴'}</span>
							</p>
						</li>
					))}
				</ul>
			</PostIt>
		</div>
	);
}
