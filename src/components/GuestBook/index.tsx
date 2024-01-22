'use client';
import Form from '@components/Form';
import CommentListItem from '@components/CommentListItem';
import { getDatabaseData } from '@/service/supabase';
import Icon from '../Icon';
import { Comment } from '@/assets';
import { useEffect, useState } from 'react';

export default function GuestBook() {
	// const dataArr = await getDatabaseData();
	const [dataArr, setDataArr] = useState([]);
	useEffect(() => {
		getDatabaseData().then((data) => setDataArr(data));
	}, []);
	return (
		<div>
			<div className=" inner">
				{/* <h2 className="text-2xl mt-10 border-b border-solid">Guest Book</h2> */}
				<Form />
				<div className=" mt-5  h-[50vh] p-3 overflow-auto bg-white/80 rounded-md">
					<ul>{dataArr.length && dataArr?.map((data) => <CommentListItem data={data} key={data.id} />)}</ul>
				</div>
			</div>
			<Icon
				src={Comment}
				alt=""
				size={50}
				className="fixed bottom-10 right-20 z-10 bg-white rounded-full p-5 hover:cursor-pointer"
			/>
		</div>
	);
}
