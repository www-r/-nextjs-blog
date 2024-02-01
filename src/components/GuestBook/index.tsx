'use client';
import { useEffect, useState } from 'react';
import Form from '@components/Form';
import CommentsContainer from '@components/CommentsContainer';
import Button from '@components/Button';
import { getDatabaseData, signInOAuthUser, signOutOAuthUser, userStateSubscription } from '@/service/supabase';
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
		getDatabaseData().then((dataArr) => {
			const sorted = dataArr.reverse();
			console.log('dataArr:', dataArr);
			setDataArr(sorted);
		});
	}, [dataArr]);

	useEffect(() => {
		checkIfAuthorized();
		userStateSubscription();
	});
	return (
		<div>
			<div className=" inner">
				<div className="flex justify-end font-bold">
					{isAuthorized ? (
						<Button onClick={async () => await signOutOAuthUser()}>로그아웃하기</Button>
					) : (
						<Button onClick={async () => await signInOAuthUser()}>로그인하기</Button>
					)}
				</div>
				<Form isAuthorized={isAuthorized} />
				<div className=" mt-5  h-[50vh] p-3 overflow-auto bg-white/80 rounded-md">
					<CommentsContainer dataArr={dataArr} />
				</div>
			</div>
		</div>
	);
}
