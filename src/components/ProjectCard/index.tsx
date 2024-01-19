import { Project } from '@/types';
import Image from 'next/image';
import Link from 'next/link';

interface Props {
	project: Project;
}

export default function ProjectCard({ project }: Props) {
	return (
		//
		<Link href={`/projects/${project.id}`}>
			<article className="border-solid border-[0.1rem] bg-white min-w-[20rem] max-w-[30rem] mx-auto rounded-md overflow-hidden shadow-md hover:shadow-xl hover:translate-x-1 hover:-translate-y-1">
				<div className="center h-[20rem]">
					<Image width={300} height={300} src={project.image} alt={project.title} style={{ objectFit: 'cover' }} />
				</div>
				<div className="h-[15rem] flex-cols justify-evenly">
					<h4 className="border-solid border-y-[0.1rem] px-3 text-xl font-bold">{project.title}</h4>
					<div className="px-3 flex-row--between flex-wrap text-sm">
						<p>{project.description.people}</p>
						<p>{project.description.term}</p>
					</div>
					<p className="px-3 text-lg truncate w-full">{project.description.paragraph}</p>
				</div>
			</article>
		</Link>
	);
}
