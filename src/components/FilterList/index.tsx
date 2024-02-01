'use client';
import { Dispatch, SetStateAction } from 'react';
import ListItem from '@components/common/ListItem';
import { FE, BE, ALL } from '@/constants';

interface Props {
	setFilter: Dispatch<SetStateAction<string>>;
}

export default function FilterList({ setFilter }: Props) {
	const clickHandler = (e) => {
		console.log(e.target.innerHTML);
		setFilter(e.target.innerHTML);
	};
	return (
		<ul className="flex gap-5">
			<ListItem className=" hover:cursor-pointer" onClick={clickHandler}>
				{ALL}
			</ListItem>
			<ListItem className="hover:cursor-pointer" onClick={clickHandler}>
				{FE}
			</ListItem>
			<ListItem className="hover:cursor-pointer" onClick={clickHandler}>
				{BE}
			</ListItem>
		</ul>
	);
}
