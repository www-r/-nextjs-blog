'ues client';
import './styles.css';
import { useState, useEffect } from 'react';
import { getRepoReadMe, getMarkdownRaw } from '@/service/github';

const GITHUB_ID = 'www-r';

export default async function ProjectSection({ github }) {
	const [data, setData] = useState<string>('');
	useEffect(() => {
		getRepoReadMe(GITHUB_ID, `${github}`)
			.then((res) => getMarkdownRaw(res))
			.then((data) => setData(data));
	}, [github]);
	return <div className="project-container" dangerouslySetInnerHTML={{ __html: `${data}` }}></div>;
}
