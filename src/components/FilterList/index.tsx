'use client';
import { Dispatch, SetStateAction } from 'react';
import { FE, BE, FULL_STACK, ALL } from '@/constants';

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
			<li className=" hover:cursor-pointer" onClick={clickHandler}>
				{ALL}
			</li>
			<li className="hover:cursor-pointer" onClick={clickHandler}>
				{FE}
			</li>
			<li className="hover:cursor-pointer" onClick={clickHandler}>
				{BE}
			</li>
		</ul>
	);
}
