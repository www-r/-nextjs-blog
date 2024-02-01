import { supabase } from '@/service';
import { CommentData } from '@/types';

const DB_TABLE_NAME = 'guestbook';

export async function getDatabaseData(): Promise<CommentData[]> {
	let { data: guestbook, error } = await supabase.from(DB_TABLE_NAME).select('*', { count: 'estimated' }).range(0, 10);
	if (error) {
		console.error(error);
	} else {
		return guestbook;
	}
}
// INSERT A ROW
export async function insertRow(input: CommentData) {
	if (input) {
		const { error } = await supabase.from(DB_TABLE_NAME).insert(input);
		console.log(error);
		if (!error) {
			alert('전송되었습니다.insertrow');
		} else {
			alert('메세지 전송에 실패했습니다.insertrow ');
		}
	} else {
		alert('메세지를 채워주세요.insertrow');
	}
}
// UPSERT MATCHING ROW
export async function upsertRow(input: CommentData) {
	try {
		const { data, status } = await supabase.from(DB_TABLE_NAME).upsert(input).select();
		console.log('Upsert', data);
		console.log('', status);
	} catch (error) {
		console.error(error);
	}
}

// INSERT MANY ROWS
// export async function insertManyRows(dataArr) {
// 	const { data, error } = await supabase.from(DB_TABLE_NAME).insert(dataArr).select();
// 	if (error) {
// 		console.error(error);
// 	}
// }

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
	try {
		const { error } = await supabase.auth.signOut();
		alert('로그아웃되었습니다.');
		window.location.reload();
	} catch (error) {
		alert('로그아웃에 실패했습니다.');
		console.log(error);
	}
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
