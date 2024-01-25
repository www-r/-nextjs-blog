import {
	ParagraphBlockObjectResponse,
	ImageBlockObjectResponse,
	ToggleBlockObjectResponse,
	PageObjectResponse,
	CheckboxPropertyItemObjectResponse,
	SelectPropertyItemObjectResponse,
	ChildPageBlockObjectResponse,
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
				name: (block as ToggleBlockObjectResponse).toggle.rich_text[0].plain_text as string,
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
		if (name === 'image') {
			const profileImgToggleId = dataBlock.results[0].id;
			const res = await retrieveBlockChildren(profileImgToggleId);
			//@ts-ignore
			return res.results[0].image.file.url;
		} else {
			//@ts-ignore
			return dataBlock.results[0].file.file.url;
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
		const titleArr = await Promise.all(response?.results.map(async (item) => await retrievePage(item.id)))
			//@ts-ignore
			.then((res) => res.map((item) => item.properties))
			.then((res) => res.map((item) => item.title))
			.then((res) => res.map((item) => item.title))
			.then((res) => res.map((item) => item[0].plain_text));
		return titleArr;
	} catch (error) {
		console.error(error);
	}
}

//
export async function createProjectDataArr(titleArr: string[]): Promise<Project[]> {
	if (titleArr) {
		return await Promise.all(
			titleArr.map(async (title) => {
				const res = await queryDatabaseByTitle(title, 'projects');
				const pageBlockArr = await retrieveBlockChildren(res.results[0].id);
				const childPageBlockId = await retrieveBlockChildren(res.results[0].id)
					.then((res) => res.results.filter((item) => (item as ChildPageBlockObjectResponse).type === 'child_page'))
					.then((res) => res[0].id);

				const toggleBlockResponseArr = pageBlockArr.results.filter(
					(item) => (item as ToggleBlockObjectResponse).type === 'toggle'
				);
				const toggleBlockIdArr = toggleBlockResponseArr.map((item) => item.id);
				const toggleArr = await Promise.all(toggleBlockIdArr.map(async (id) => await retrieveBlockChildren(id)))
					.then((res) => res.map((item) => item.results))
					.then((res) => res.map((item) => item[0]));

				return {
					title: (toggleArr[0] as ParagraphBlockObjectResponse)?.paragraph.rich_text[0].plain_text,
					id: childPageBlockId,
					link: (toggleArr[1] as ParagraphBlockObjectResponse)?.paragraph.rich_text[0].plain_text,
					//@ts-ignore
					image: (toggleArr[2] as ImageBlockObjectResponse)?.image.file.url as string,
					description: {
						people: (toggleArr[4] as ParagraphBlockObjectResponse)?.paragraph.rich_text[0].plain_text,
						term: (toggleArr[3] as ParagraphBlockObjectResponse)?.paragraph.rich_text[0].plain_text,
						paragraph: (toggleArr[5] as ParagraphBlockObjectResponse)?.paragraph.rich_text[0].plain_text,
					},
					pinned: ((res.results[0] as PageObjectResponse).properties.pinned as CheckboxPropertyItemObjectResponse)
						.checkbox,
					category: ((res.results[0] as PageObjectResponse).properties.category as SelectPropertyItemObjectResponse)
						.select.name,
				};
			})
		);
	}
}
