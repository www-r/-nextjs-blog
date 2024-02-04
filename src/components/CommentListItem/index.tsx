'use client';
import Icon from '@/components/common/Icon';
import Button from '../Button';
import { deleteSelectedRow } from '@/service/supabase';
import Locked from '@/assets/lock.svg';
import { CommentData } from '@/types';
import { useEffect, useState } from 'react';

interface Props {
	data: CommentData;
}

export default function CommentListItem({ data }: Props) {
	const [isEditable, setIsEditable] = useState(false);
	const [isAuthor, setIsAuthor] = useState(false);
	function compareTwoIds(data: CommentData) {
		const userData = JSON.parse(window.localStorage.getItem('user'));
		if (userData) {
			if (data.user_id === userData.id) {
				return true;
			} else {
				alert('일치하는 작성자가 아닙니다.');
				return false;
			}
		} else {
			alert('로그인해주세요.');
		}
	}
	function clickEditButton(data: CommentData) {
		if (compareTwoIds(data)) {
			setIsEditable(true);
		}
	}
	async function clickDeleteButton(data: CommentData) {
		if (compareTwoIds(data)) {
			await deleteSelectedRow(data.id);
			alert('삭제되었습니다.');
			location.reload();
		}
	}
	async function clickSendButton() {}
	useEffect(() => {
		const user = JSON.parse(localStorage.getItem('user'));
		if (user) {
			if (data.user_id === user.id) {
				setIsAuthor(true);
			}
		}
	});
	return (
		<li className=" border border-solid rounded-sm  p-4 mx-2 my-1 grid grid-cols-[9fr_1fr]">
			<div>
				<div className="grid grid-cols-[9fr_1fr] text-xs">
					<div className="flex">
						<p className="mr-2">{data.author}</p>
						{data.is_locked ? <Icon src={Locked} alt="locked" size={18} /> : <></>}
					</div>
					<div>{data.created_at}</div>
				</div>
				{isEditable ? (
					<textarea className="w-full underline decoration-[0.09rem] border border-solid p-2 "></textarea>
				) : (
					<div className="text-sm">{data.is_locked && !isAuthor ? '메세지가 잠겨있습니다' : data.message}</div>
				)}
			</div>
			<div className="flex flex-col justify-between">
				{isEditable ? (
					<Button onClick={clickSendButton}>보내기</Button>
				) : (
					<Button onClick={() => clickEditButton(data)}>수정하기</Button>
				)}
				<Button onClick={() => clickDeleteButton(data)}>삭제하기</Button>
			</div>
		</li>
	);
}
