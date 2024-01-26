'use client';
import { useState, useEffect } from 'react';
import { Project } from '@/types';
import FilterList from '@components/FilterList';
import Grid from '@components/Grid';
import { ALL } from '@/constants';
interface Props {
	projectArr: Project[];
}

export default function ProjectsContent({ projectArr }: Props) {
	const [projects, setProjects] = useState(projectArr);
	const [filter, setFilter] = useState<string>(ALL);

	useEffect(() => {
		if (filter === ALL) {
			setProjects(projectArr);
		}
		if (filter !== ALL) {
			const filteredArr = projectArr.filter((item) => item.category === filter);
			setProjects(filteredArr);
		}
	}, [filter, projectArr]); //왜? 질문하ㄱ;

	return (
		<>
			<div className="inner flex-row--between mt-5 mx-3 text-lg">
				<div className="">{`Projects (${projects.length})`}</div>
				<FilterList setFilter={setFilter} />
			</div>
			<div className="py-20">
				<Grid projects={projects} />
			</div>
		</>
	);
}
