import { supabase } from '@/service';
import { CommentData } from '@/types';

const DB_TABLE_PROJECT = 'project';
const DB_TABLE_SKILL = 'skill';
const DB_TABLE_GUESTBOOK = 'guestbook';

export async function readProjectAllRows() {
	let { data: project, error } = await supabase.from(DB_TABLE_PROJECT).select('*');
	if (error) {
		console.error('readProjectDB', error);
	}
	return project;
}
export async function readPinnedProject() {
	let { data: project, error } = await supabase.from(DB_TABLE_PROJECT).select('*').eq('pinned', true);
	if (error) {
		console.error('readPinnedProject', error);
	}
	return project;
}
export async function readSkillAllRows() {
	let { data: skill, error } = await supabase.from(DB_TABLE_SKILL).select('*');
	if (error) {
		console.error('readSkillDB', error);
	}
	return skill; //skillArr
}
export async function readGuestbookAllRows(): Promise<CommentData[]> {
	let { data: guestbook, error } = await supabase.from(DB_TABLE_GUESTBOOK).select('*', { count: 'estimated' });
	if (error) {
		console.error(error);
	}
	return guestbook;
}
//WITH PAGINATION
export async function readGuestbookPagination(from = 0, to = 9) {
	let { data: guestbook, error } = await supabase.from(DB_TABLE_GUESTBOOK).select('*').range(from, to);
	if (error) {
		console.error('readGuestbookPagination', error);
	}
	return guestbook;
}
// INSERT A ROW
export async function insertRow(input: CommentData) {
	await supabase.from(DB_TABLE_GUESTBOOK).insert(input);
}

// DELETE ROW
export async function deleteSelectedRow(id: string) {
	const { error } = await supabase.from(DB_TABLE_GUESTBOOK).delete().eq('id', id);
	console.log('deleteRow', error);
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
	await supabase.auth.signOut();
}

export function setSession(session) {
	if (session && session.provider_token) {
		window.localStorage.setItem('oauth_provider_token', session.provider_token);
	}

	if (session && session.provider_refresh_token) {
		window.localStorage.setItem('oauth_provider_refresh_token', session.provider_refresh_token);
	}
}

export async function retrieveUser() {
	const {
		data: { user },
	} = await supabase.auth.getUser();

	return user;
}

export async function retrieveSession() {
	const { data, error } = await supabase.auth.getSession();
	if (error) {
		console.error(error);
	}
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
			window.localStorage.removeItem('user');
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
