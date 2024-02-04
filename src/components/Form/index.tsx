'use client';
import { useState, useEffect, useRef, useCallback, useReducer } from 'react';
import Label from '@/components/common/Label';
import FormCover from '@components/FormCover';

import { insertRow, signInOAuthUser } from '@/service/supabase';
import { modalReducer } from '@/reducer/modalReducer';
import { formatDate } from '@/utils/formatDate';

import { User } from '@/types';

export default function Form({ isAuthorized, dataArr, setDataArr }) {
	const [user, setUser] = useState<User>();
	const time = formatDate();
	const authorRef = useRef(null);

	const messageRef = useRef(null);
	const passwordRef = useRef(null);
	const checkboxRef = useRef(null);
	const [isPasswordDisabled, setIsPasswordDisabled] = useState<boolean>(true);
	const [state, dispatch] = useReducer(modalReducer, false);

	function checkboxHandler() {
		if (isPasswordDisabled) {
			passwordRef.current.value = null;
		}
		setIsPasswordDisabled(!isPasswordDisabled);
	}
	function getCommentData() {
		if (user) {
			return {
				author: authorRef.current.value,
				created_at: time,
				message: messageRef.current.value,
				password: passwordRef.current.value ? passwordRef.current.value : null,
				is_locked: passwordRef.current.value ? true : false,
				user_id: user.id,
			};
		}
	}
	async function submitHandler(e) {
		e.preventDefault();
		if (authorRef.current.value && messageRef.current.value) {
			const data = getCommentData();
			try {
				await insertRow(data);
				alert('전송되었습니다.');
				setDataArr(...dataArr, data);
			} catch (error) {
				console.log(error);
				alert('전송에 실패했습니다');
			}
		} else {
			alert('작성자와 메세지를 채워주세요.');
		}
	}
	const buttonClickHandler = useCallback(async () => await signInOAuthUser(), []);

	useEffect(() => {
		const userInfo = JSON.parse(window.localStorage.getItem('user'));
		setUser(userInfo);
	}, []); // []있으면 메세지가 안 보내진다.
	return (
		<form action="" className="mt-3 text-xs relative bg-white/60 rounded-md opacity-100 p-3">
			{!isAuthorized && <FormCover className="hover:bg-white/80" buttonClickHandler={buttonClickHandler} />}
			<div className=" grid grid-cols-[7fr_3fr] gap-5 ">
				<div className="p-3">
					<Label htmlFor="author-name">작성자</Label>
					<input
						id="author-name"
						placeholder="              "
						maxLength={15}
						className="underline decoration-[0.09rem] bg-transparent focus:bg-white"
						required
						ref={authorRef}
					/>
				</div>
				<div className="p-2">
					<Label htmlFor="date">날짜</Label>
					<time dateTime={time} id="date" className="underline decoration-[0.09rem] ">
						{time}
					</time>
				</div>
			</div>
			<div className="grid grid-cols-[7fr_3fr] gap-5">
				<div className="p-2">
					<Label htmlFor="input--message">메세지</Label>
					<textarea
						className="w-full underline decoration-[0.09rem] border border-solid p-2 bg-transparent focus:bg-white "
						rows={2}
						minLength={1}
						maxLength={100}
						required
						id="input--message"
						ref={messageRef}
					/>
				</div>
				<div>
					<div className="p-2">
						<Label htmlFor="secret">비밀글</Label>
						<input
							className="underline decoration-[0.09rem] bg-transparent focus:bg-white "
							type="text"
							id="secret"
							placeholder="숫자 6개를 입력해주세요"
							minLength={6}
							maxLength={6}
							disabled={isPasswordDisabled}
							ref={passwordRef}
						/>
						<input
							type="checkbox"
							checked={!isPasswordDisabled}
							className="mr-2"
							ref={checkboxRef}
							onChange={checkboxHandler}
						/>
					</div>
					<button className=" w-full pt-10 px-2" type="submit" onClick={async (e) => await submitHandler(e)}>
						<p className="border-b border-solid">보내기</p>
					</button>
				</div>
			</div>
		</form>
	);
}
