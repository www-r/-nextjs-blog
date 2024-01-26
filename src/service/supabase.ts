import { supabase } from '@/database/supabase';
const DB_TABLE_NAME = 'guestbook';

export async function getDatabaseData() {
	let { data: guestbook, error } = await supabase.from(DB_TABLE_NAME).select('*', { count: 'estimated' }).range(0, 10);
	if (error) {
		console.error(error);
	} else {
		console.log(guestbook);
		return guestbook;
	}
}
// INSERT A ROW
export async function insertRow(input) {
	if (input) {
		try {
			const { data, error } = await supabase.from(DB_TABLE_NAME).insert([input]).select();
			console.log('insertRow:', data);
			alert('작성되었습니다.');
		} catch (error) {
			console.error(error);
		}
	} else {
		console.log(input);
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
// DELETE ROW
export async function deleteSelectedRow(id: string) {
	const { error } = await supabase.from(DB_TABLE_NAME).delete().eq('id', id);
}

export async function signInOAuthUser() {
	const { data, error } = await supabase.auth.signInWithOAuth({
		provider: 'google',
		options: {
			redirectTo: 'https://kimyoungen.com/guestbook',
			queryParams: {
				access_type: 'offline',
				prompt: 'consent',
			},
		},
	});
	if (error) {
		console.error(error);
	}
}
export async function signOutOAuthUser() {
	const { error } = await supabase.auth.signOut();
	alert('로그아웃되었습니다.');
	if (error) {
		console.error(error);
	} else {
		window.location.reload();
	}
}

export function setSession(session) {
	if (session && session.provider_token) {
		window.localStorage.setItem('oauth_provider_token', session.provider_token);
		console.log('set');
	}

	if (session && session.provider_refresh_token) {
		window.localStorage.setItem('oauth_provider_refresh_token', session.provider_refresh_token);
		console.log('set_refresh');
	}
}

export async function retrieveUser() {
	const {
		data: { user },
	} = await supabase.auth.getUser();
	console.log('user', user);
	return user;
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

export function userStateSubscription() {
	return supabase.auth.onAuthStateChange(async (event, session) => {
		if (event === 'INITIAL_SESSION') {
			// handle initial session
			if (session && session.provider_token) {
				window.localStorage.setItem('oauth_provider_token', session.provider_token);
			}
			if (session && session.provider_refresh_token) {
				window.localStorage.setItem('oauth_provider_refresh_token', session.provider_refresh_token);
			}
			if (session && session.user) {
				const userInfo = JSON.stringify({ aud: session.user.aud, email: session.user.email, id: session.user.id });
				window.localStorage.setItem('user', userInfo);
			}
		}
		if (event === 'SIGNED_IN') {
			// handle sign in event
		}
		if (event === 'SIGNED_OUT') {
			// handle sign out event
			window.localStorage.removeItem('user');
			await signOutOAuthUser();
		}
		if (event === 'PASSWORD_RECOVERY') {
			// handle password recovery event
		}
		if (event === 'TOKEN_REFRESHED') {
			// handle token refreshed event
		}
		if (event === 'USER_UPDATED') {
			// handle user updated event
		}
	});
}
