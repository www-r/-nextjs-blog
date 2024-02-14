import Link from 'next/link';
import Section from '@/components/common/Section';
import Slider from '@/components/common/Slider';
import SubTitle from '@/components/common/Subtitle';
import SkillBox from '@/components/common/SkillBox';
import ProjectCard from '@/components/common/ProjectCard';
import { readPinnedProject, readSkillAllRows } from '@/service/supabase';
import { Skill } from '@/types';

export default async function SliderSection() {
	try {
		const skillArr = await readSkillAllRows();
		const projectArr = await readPinnedProject();

		return (
			<div>
				<Section className="bg-ivory">
					<Link href="/projects">
						<SubTitle>Pinned Project</SubTitle>
					</Link>
					<div className="inner">
						<Slider type="project">
							{projectArr.map((project) => (
								<div key={project.id}>
									<ProjectCard project={project} />
								</div>
							))}
						</Slider>
					</div>
				</Section>
				<Section className="bg-blue">
					<SubTitle>Skill</SubTitle>
					<Slider type="skill">
						{(skillArr as Skill[]).map((skill) => (
							<SkillBox skill={skill} key={skill.id} />
						))}
					</Slider>
				</Section>
			</div>
		);
	} catch (error) {
		console.log('error', error.message);
	}
}
