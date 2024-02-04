export type Database = 'main' | 'projects';
// export type Toggle = 'image' | 'profile' | 'skill' | 'education' | 'contact';

export type Profile = {
	key: string;
	value: string;
};
export type Skill = {
	id: number;
	name: string;
	image: string;
};
export type Education = {
	name: string;
	when: string;
	finished: boolean;
};

export type Project = {
	id: number;
	name: string;
	who: string;
	when: string;
	githubRepo: string;
	thumbnail: string;
	description: string;
	pinned: boolean;
	category: string;
};

export type Contact = {
	key: string;
	value: string[];
};

export type CommentData = {
	id?: string;
	created_at: string;
	message: string;
	author: string;
	is_locked: boolean;
	password: string;
	user_id: string;
};
export type User = {
	aud: string;
	email: string;
	id: string;
};
