'use client';
import { useEffect, useState } from 'react';
import useModal from '@/hooks/useModal';
import Form from '@components/Form';
import CommentsContainer from '@components/CommentsContainer';
import Button from '@components/Button';
import { readGuestbookAllRows, signInOAuthUser, signOutOAuthUser, userStateSubscription } from '@/service/supabase';
import { CommentData } from '@/types';

export default function GuestBook() {
	const [isAuthorized, setIsAuthorized] = useState<boolean>();
	const [dataArr, setDataArr] = useState<CommentData[]>([]);
	const [setState, setMessage] = useModal();

	function checkIfAuthorized() {
		if (localStorage.getItem('user')) {
			setIsAuthorized(true);
		}
	}
	const loginHandler = async () => {
		try {
			await signInOAuthUser();
			setIsAuthorized(true);
		} catch (error) {
			console.log(error);
			setMessage('로그인에 실패했습니다.');
		}
	};
	const logoutHandler = async () => {
		try {
			await signOutOAuthUser();
			setState(true);
			setMessage('정상적으로 로그아웃되었습니다.');
			setIsAuthorized(false);
		} catch (error) {
			console.log(error);
			setMessage('로그아웃에 실패했습니다. 다시 시도해주세요.');
		}
	};

	useEffect(() => {
		readGuestbookAllRows().then((dataArr) => {
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
				<Form isAuthorized={isAuthorized} dataArr={dataArr} setDataArr={setDataArr} />
				<div className=" mt-5  h-[50vh] p-3 overflow-auto bg-white/80 rounded-md">
					<CommentsContainer dataArr={dataArr} />
				</div>
			</div>
		</div>
	);
}
