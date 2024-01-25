'use client';
import { useEffect, useState } from 'react';
import Form from '@components/Form';
import CommentsContainer from '@components/CommentsContainer';
import { getDatabaseData, signOutOAuthUser, userStateSubscription } from '@/service/supabase';
import { CommentData } from '@/types';

export default function GuestBook() {
	const [isAuthorized, setIsAuthorized] = useState(false);
	const [dataArr, setDataArr] = useState<CommentData[]>([]);
	function checkIfAuthorized() {
		if (localStorage.getItem('user')) {
			setIsAuthorized(true);
		}
	}
	useEffect(() => {
		getDatabaseData().then((data) => {
			const sorted = data.sort((a, b) => b - a);
			setDataArr(sorted);
		});
	}, []);

	useEffect(() => {
		checkIfAuthorized();
		userStateSubscription();
	}, []);
	return (
		<div>
			<div className=" inner">
				{/* <h2 className="text-2xl mt-10 border-b border-solid">Guest Book</h2> */}
				{isAuthorized && <button onClick={async () => await signOutOAuthUser()}>로그아웃하기</button>}
				<Form isAuthorized={isAuthorized} />
				<div className=" mt-5  h-[50vh] p-3 overflow-auto bg-white/80 rounded-md">
					<CommentsContainer dataArr={dataArr} />
				</div>
			</div>
		</div>
	);
}
