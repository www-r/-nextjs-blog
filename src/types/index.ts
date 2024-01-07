

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


