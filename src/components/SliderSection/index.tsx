import Link from 'next/link';
import Slider from '@components/Slider';
import SubTitle from '@components/SubTitle';
import SkillBox from '@components/SkillBox';
import ProjectCard from '@components/ProjectCard';
import Icon from '@components/Icon';
import { getFileUrlFromToggle, readJsonFile, getUploadedProjectsTitle, createProjectDataArr } from '@/service/data';
import { Skill } from '@/types';
import Chevron from '@/assets/arrow_forward.png';

export default async function SliderSection() {
	try {
		const fileUrl = await getFileUrlFromToggle('skill');
		const skillDataArr = await readJsonFile(fileUrl);
		const randomNumber = Math.random();

		const titleArr = await getUploadedProjectsTitle();
		const projectDataArr = await createProjectDataArr(titleArr);

		return (
			<section className="bg-white py-[10rem]  flex-cols gap-[5rem]">
				<div>
					<SubTitle>Skill</SubTitle>

					<Slider type="skill">
						{(skillDataArr as Skill[]).map((data, index: number) => (
							<SkillBox data={data} key={index + randomNumber} />
						))}
					</Slider>
				</div>
				<div>
					<Link href="/projects">
						<SubTitle>
							<div className="flex items-center gap-5">
								Pinned Project
								<Icon src={Chevron} alt="" animation />
							</div>
						</SubTitle>
					</Link>
					<div className='inner'>
						<Slider type="project">
							{projectDataArr.map((data) => (
								<li key={data.id}>
									<ProjectCard project={data} />
								</li>
							))}
						</Slider>
					</div>
				</div>
			</section>
		);
	} catch (error) {
		console.log('error', error.message);
	}
}
