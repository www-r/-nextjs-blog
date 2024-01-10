import { ListBlockChildrenResponse } from '@notionhq/client/build/src/api-endpoints';
import { Database } from '@/types';
import { Client } from '@notionhq/client';

// Initializing a client
const notion = new Client({
	auth: process.env.NOTION_TOKEN,
});

export async function queryDatabaseByTitle(titleName, type) {
	let dbId;
	if (type === 'projects') {
		dbId = process.env.PROJECTS_DB_ID;
	}
	if (type === 'main') {
		dbId = process.env.DB_ID;
	}

	const response = await notion.databases.query({
		database_id: dbId,
		filter: {
			and: [
				{
					property: 'upload',
					checkbox: {
						equals: true,
					},
				},
				{
					property: 'title',
					title: {
						contains: titleName,
					},
				},
			],
		},
	});
	return response; //ListObject
}

export async function queryDatabaseByPinned() {
	const dbId = process.env.PROJECTS_DB_ID;

	const response = await notion.databases.query({
		database_id: dbId,
		filter: {
			and: [
				{
					property: 'pinned',
					checkbox: {
						equals: true,
					},
				},
			],
		},
	});
	return response; //ListObject
}

export const retrievePage = async (id: string) => {
	const pageId = id;
	const response = await notion.pages.retrieve({ page_id: pageId });
	return response;
};
export const retrieveBlockChildren = async (id: string): Promise<ListBlockChildrenResponse> => {
	const response = await notion.blocks.children.list({
		block_id: id,
		page_size: 10,
	});
	return response;
};
