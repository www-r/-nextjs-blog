'use client';
import { Dispatch, SetStateAction } from 'react';
import ListItem from '@components/common/ListItem';
import { PROJECT_CATEGORY } from '@/constants';

interface Props {
	setFilter: Dispatch<SetStateAction<string>>;
}

export default function FilterList({ setFilter }: Props) {
	const clickHandler = (e) => {
		setFilter(e.target.innerHTML);
	};
	return (
		<ul className="flex gap-5">
			<ListItem onClick={clickHandler}>{PROJECT_CATEGORY.all}</ListItem>
			<ListItem onClick={clickHandler}>{PROJECT_CATEGORY.fe}</ListItem>
			<ListItem onClick={clickHandler}>{PROJECT_CATEGORY.be}</ListItem>
		</ul>
	);
}
