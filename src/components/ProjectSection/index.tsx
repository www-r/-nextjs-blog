'ues client';
import './styles.css';
import { useState, useEffect } from 'react';
import { getRepoReadMe, getMarkdownRaw } from '@/service/github';
export default async function ProjectSection({ github }) {
	const [data, setData] = useState<string>('');
	useEffect(() => {
		getRepoReadMe('www-r', `${github}`)
			.then((res) => getMarkdownRaw(res))
			.then((data) => setData(data));
	}, []);
	return <div className="project-container" dangerouslySetInnerHTML={{ __html: `${data}` }}></div>;
}
