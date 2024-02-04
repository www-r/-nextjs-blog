import { octokit } from '@/service';
const GITHUB_OWNER = 'www-r';

export async function getRepoReadMe(owner = GITHUB_OWNER as string | undefined, repo: string) {
	const response = await octokit.request(`GET /repos/${owner}/${repo}/readme`, {
		owner: owner,
		repo: repo,
		headers: {
			'X-GitHub-Api-Version': '2022-11-28',
			accept: 'application/vnd.github.raw+json',
		},
	});
	// console.log('ddd', response);
	return response.data;
}

export async function getMarkdownRaw(markdownText: string) {
	const res = await octokit.request('POST /markdown', {
		text: markdownText,
		mode: 'markdown',
		// data: '# Markdownmasrkdksjflksdlsjf',
		headers: {
			'X-GitHub-Api-Version': '2022-11-28',
			'Content-Type': 'text/x-markdown',
		},
	});
	// console.log('ddd', res.data);
	return res.data;
}
