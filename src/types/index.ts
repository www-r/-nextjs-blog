
export type Post = {
	title: string;
	description: string;
	date: string;
	path: string;
	featured: boolean;
};
export type Project = {
	title: string;
	id: string;
	image: string;
	description: {
		people: string;
		term: string;
		paragraph: string;
	};
	pinned: boolean;
	category: 'Front-End' | 'Back-End' | 'Full-Stack' | 'All';
};

export type CardContent = {
	title: string;
	date: string;
	description: string;
};
