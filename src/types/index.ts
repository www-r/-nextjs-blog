export type Database = 'main' | 'projects';
// export type Toggle = 'image' | 'profile' | 'skill' | 'education' | 'contact';

export type Profile = {
	key: string;
	value: string;
};
export type Skill = {
	name: string;
	description: string;
	image: string;
};
export type Education = {
	name: string;
	when: string;
	finished: boolean;
};

export type Project = {
	title: string;
	id: string; //childPageId
	link: string;
	image: string;
	description: {
		people: string;
		term: string;
		paragraph: string;
	};
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
