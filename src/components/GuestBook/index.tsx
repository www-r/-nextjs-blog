'use client';
import { useEffect, useState } from 'react';
import Form from '@components/Form';
import CommentsContainer from '@components/CommentsContainer';
import Button from '@components/Button';
import { getDatabaseData, signInOAuthUser, signOutOAuthUser, userStateSubscription } from '@/service/supabase';
import { CommentData } from '@/types';

export default function GuestBook() {
	const [isAuthorized, setIsAuthorized] = useState<boolean>();
	const [dataArr, setDataArr] = useState<CommentData[]>([]);
	function checkIfAuthorized() {
		if (localStorage.getItem('user')) {
			setIsAuthorized(true);
		}
	}
	const loginHandler = async () => {
		await signInOAuthUser();
		setIsAuthorized(true);
	};
	const logoutHandler = async () => {
		await signOutOAuthUser();
		setIsAuthorized(false);
	};

	useEffect(() => {
		getDatabaseData().then((dataArr) => {
			const sorted = dataArr.reverse();
			setDataArr(sorted);
		});
	}, []);

	useEffect(() => {
		checkIfAuthorized();
		userStateSubscription();
	});
	return (
		<div>
			<div className=" inner">
				<div className="flex justify-end font-bold">
					{isAuthorized ? (
						<Button onClick={logoutHandler}>로그아웃하기</Button>
					) : (
						<Button onClick={loginHandler}>로그인하기</Button>
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
