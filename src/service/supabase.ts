import { supabase } from '@/database/supabase';

const DB_TABLE_NAME = 'guestbook';

export async function getDatabaseData(row = '') {
	let { data: guestbook, error } = await supabase.from(DB_TABLE_NAME).select(row);
	if (error) {
		console.error(error);
	} else {
		// console.log(guestbook);
		return guestbook;
	}
}
// INSERT A ROW
export async function insertRow(input) {
	const { data, error } = await supabase.from(DB_TABLE_NAME).insert(input);
	// console.log('insertRow:', data);
	if (error) {
		console.error(error);
	}
}
// INSERT MANY ROWS
export async function insertManyRows(dataArr) {
	const { data, error } = await supabase.from(DB_TABLE_NAME).insert(dataArr).select();
	if (error) {
		console.error(error);
	}
}
// UPSERT MATCHING ROWS
export async function upsertMatchingRows() {
	const { data, error } = await supabase.from(DB_TABLE_NAME).upsert({ some_column: 'someValue' }).select();
	if (error) {
		console.error(error);
	} else {
		console.log('upsertMatchingRow:', data);
		return data;
	}
}

export async function signInOAuthUser() {
	const { data, error } = await supabase.auth.signInWithOAuth({
		provider: 'google',
		options: {
			redirectTo: '/guestbook',
			queryParams: {
				access_type: 'offline',
				prompt: 'consent',
			},
		},
	});

	if (error) {
		console.error(error);
	}
	console.log('data', data);
	// window.localStorage.setItem('provider_refresh_token', data);
}
export async function signOutOAuthUser() {
	const { error } = await supabase.auth.signOut();
	if (error) {
		console.error(error);
	}
	alert('로그아웃되었습니다.');
}

export async function retrieveUser() {
	const {
		data: { user },
	} = await supabase.auth.getUser();
	console.log(user);
}
export async function retrieveSession() {
	const { data, error } = await supabase.auth.getSession();
	if (error) {
		console.error(error);
	}
	console.log('retrieveSession', data);
}
export async function retrieveNewSession() {
	const { data, error } = await supabase.auth.refreshSession();
	const { session, user } = data;
	if (error) {
		console.error(error);
	}
}
