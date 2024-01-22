import Link from 'next/link';
import Section from '@components/Section';
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
		const a = getFileUrlFromToggle('image');
		const fileUrl = await getFileUrlFromToggle('skill');
		const skillDataArr = await readJsonFile(fileUrl);
		const randomNumber = Math.random();

		const titleArr = await getUploadedProjectsTitle();
		const projectDataArr = await createProjectDataArr(titleArr);

		return (
			<div>
				<Section className="bg-ivory">
					<Link href="/projects">
						<SubTitle>
							<div className="flex items-center gap-5">
								Pinned Project
								<Icon src={Chevron} alt="" animation />
							</div>
						</SubTitle>
					</Link>
					<div className="inner">
						<Slider type="project">
							{projectDataArr.map((data) => (
								<div key={data.id}>
									<ProjectCard project={data} />
								</div>
							))}
						</Slider>
					</div>
				</Section>
				<Section className="bg-blue">
					<SubTitle>Skill</SubTitle>
					<Slider type="skill">
						{(skillDataArr as Skill[]).map((data, index: number) => (
							<SkillBox data={data} key={index + randomNumber} />
						))}
					</Slider>
				</Section>
			</div>
		);
	} catch (error) {
		console.log('error', error.message);
	}
}
