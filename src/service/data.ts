import {
	ParagraphBlockObjectResponse,
	ImageBlockObjectResponse,
	ToggleBlockObjectResponse,
	ChildPageBlockObjectResponse,
	BlockObjectResponse,
	PageObjectResponse,
} from '@notionhq/client/build/src/api-endpoints';
import { queryDatabaseByTitle, retrieveBlockChildren, retrievePage } from './notion';
import { Project } from '@/types';

async function getDataPageId() {
	try {
		return await queryDatabaseByTitle('Data', 'main').then((res) => res.results[0].id);
	} catch (error) {
		console.error(error);
	}
}
async function getDataBlockArr() {
	try {
		const id = await getDataPageId();
		const dataBlockArr = await retrieveBlockChildren(id).then((res) => res.results);
		return dataBlockArr;
	} catch (error) {
		console.error(error);
	}
}
async function createDataToggleArr() {
	try {
		const dataBlockArr = await getDataBlockArr();
		const toggleArr = dataBlockArr.map((block) => {
			return {
				name: block.toggle.rich_text[0].plain_text as string,
				id: block.id,
			};
		});
		return toggleArr;
	} catch (error) {
		console.error(error);
	}
}
async function getDataToggleArr() {
	const res = await createDataToggleArr();
	return res;
}
export async function getFileUrlFromToggle(name: string) {
	try {
		const toggle = await getDataToggleArr().then((res) => res.find((item) => item.name === name));
		const dataBlock = await retrieveBlockChildren(toggle.id);
		// console.log('testest', dataBlock);
		if (name === 'image') {
			const profileImgToggleId = dataBlock.results[0].id;
			const res = await retrieveBlockChildren(profileImgToggleId);
		
			return res.results[0].image.file.url;
		} else {
			return dataBlock.results[0].file.file.url; //.json url
		}
	} catch (error) {
		console.error(error);
	}
}
export async function readJsonFile(url: string) {
	try {
		const data = await fetch(url, {
			method: 'GET',
			headers: {
				Accept: 'application/json',
			},
		})
			.then((response) => response.json())
			.then((response) => JSON.stringify(response))
			.then((response) => JSON.parse(response));

		return data;
	} catch (error) {
		console.error(error);
	}
}

export async function getUploadedProjectsTitle(): Promise<string[]> {
	try {
		const response = await queryDatabaseByTitle('', 'projects');
		// console.log('projectsDB', response);

		const titleArr = await Promise.all(response?.results.map(async (item) => await retrievePage(item.id)))
			.then((res) => res.map((item) => item.properties))
			.then((res) => res.map((item) => item.title))
			.then((res) => res.map((item) => item.title))
			.then((res) => res.map((item) => item[0].plain_text));
		// console.log('titleArr', titleArr);
		return titleArr;
	} catch (error) {
		console.error(error);
	}
}

//
export async function createProjectDataArr(titleArr: string[]): Promise<Project[]> {
	// console.log('titleArr', titleArr);
	if (titleArr) {
		return await Promise.all(
			titleArr.map(async (title) => {
				const res = await queryDatabaseByTitle(title, 'projects');
				const pageBlockArr = await retrieveBlockChildren(res.results[0].id);
				const childPageBlockId = await retrieveBlockChildren(res.results[0].id)
					.then((res) => res.results.filter((item) => item.type === 'child_page'))
					.then((res) => res[0].id);
				// console.log('childPageBlockArr', childPageBlockId);

				const toggleBlockResponseArr = pageBlockArr.results.filter((item) => item.type === 'toggle');
				const toggleBlockIdArr = toggleBlockResponseArr.map((item) => item.id);
				const toggleArr = await Promise.all(toggleBlockIdArr.map(async (id) => await retrieveBlockChildren(id)))
					.then((res) => res.map((item) => item.results))
					.then((res) => res.map((item) => item[0]));

				return {
					title: (toggleArr[0] as ParagraphBlockObjectResponse)?.paragraph.rich_text[0].plain_text,
					id: childPageBlockId,
					link: (toggleArr[1] as ParagraphBlockObjectResponse)?.paragraph.rich_text[0].plain_text,
					image: (toggleArr[2] as ImageBlockObjectResponse)?.image.file.url,
					description: {
						people: (toggleArr[4] as ParagraphBlockObjectResponse)?.paragraph.rich_text[0].plain_text,
						term: (toggleArr[3] as ParagraphBlockObjectResponse)?.paragraph.rich_text[0].plain_text,
						paragraph: (toggleArr[5] as ParagraphBlockObjectResponse)?.paragraph.rich_text[0].plain_text,
					},
					pinned: (res.results[0] as PageObjectResponse).properties.pinned.checkbox,
					category: (res.results[0] as PageObjectResponse).properties.category.select.name,
				};
			})
		);
	}
}
