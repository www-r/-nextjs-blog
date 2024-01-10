import React from 'react';
import Slider from '@components/Slider';
import SubTitle from '@components/SubTitle';
import SkillBox from '@components/SkillBox';
import ProjectCard from '@components/ProjectCard';
import { getFileUrlFromToggle, readJsonFile, getUploadedProjectsTitle, createProjectDataArr } from '@/service/data';
import { Skill } from '@/types';

export default async function SliderSection() {
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
				<SubTitle>Pinned Project</SubTitle>
				<Slider type="project">
					{projectDataArr.map((data) => (
						<li key={data.id}>
							<ProjectCard project={data} />
						</li>
					))}
				</Slider>
			</div>
		</section>
	);
}
