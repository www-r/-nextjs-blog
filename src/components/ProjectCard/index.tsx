'use client';
import Link from 'next/link';
import Image from 'next/image';
// import { usePathname } from 'next/navigation';
import { Project } from '@/types';
interface Props {
	project: Project;
}

export default function ProjectCard({ project }: Props) {
	return (
		<Link
			href={{
				pathname: `/projects/${project.githubRepo}`,
			}}
		>
			<article className="border-solid border-[0.1rem] bg-white min-w-[20rem] max-w-[25rem] mx-auto rounded-md overflow-hidden shadow-md hover:shadow-xl hover:translate-x-1 hover:-translate-y-1">
				<div className="center h-[20rem]">
					<Image width={300} height={300} src={project.thumbnail} alt={project.name} style={{ objectFit: 'cover' }} />
				</div>
				<div className="h-[15rem] flex-cols justify-evenly">
					<h4 className="border-solid border-y-[0.1rem] px-3 text-lg font-bold">{project.name}</h4>
					<div className="px-3 flex-row--between flex-wrap text-sm">
						<p>{project.who}</p>
						<p>{project.when}</p>
					</div>
					<p className="px-3 text-md truncate w-full">{project.description}</p>
				</div>
			</article>
		</Link>
	);
}
