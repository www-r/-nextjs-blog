'use client';
import { Project } from '@/types';
import ProjectCard from '../ProjectCard';

interface Props {
	projects: Project[];
}

export default function Grid({ projects }: Props) {
	try {
		return (
			<ul className="mx-[5vw] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4  gap-x-[4rem] gap-y-20 py-20 ">
				{projects.map((project) => (
					<li key={project.id}>
						<ProjectCard project={project} />
					</li>
				))}
			</ul>
		);
	} catch (error) {
		console.error(error);
	}
}
