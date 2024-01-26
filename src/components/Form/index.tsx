'use client';
import { useState, useEffect, useRef, useCallback } from 'react';
import Label from '@components/Label';
import FormCover from '@components/FormCover';
// import Button from '../Button';
import { insertRow, retrieveSession, signInOAuthUser } from '@/service/supabase';
import { formatDate } from '@/utils/formatDate';
import useHover from '@/hooks/useHover';
import { User } from '@/types';
// import { useHover } from '@uidotdev/usehooks';

export default function Form({ isAuthorized }) {
	const [user, setUser] = useState<User>();
	const time = formatDate();
	const authorRef = useRef(null);
	const dateRef = useRef(null);
	const messageRef = useRef(null);
	const passwordRef = useRef(null);
	const checkboxRef = useRef(null);
	const [isPasswordDisabled, setIsPasswordDisabled] = useState<boolean>(true);
	// const [isAuthorized, setIsAuthorized] = useState(false);
	// const [ref, hovering] = useHover();

	function checkboxHandler() {
		setIsPasswordDisabled(!isPasswordDisabled);
	}
	function getCommentData() {
		return {
			author: authorRef.current.value,
			created_at: dateRef.current.innerText,
			message: messageRef.current.value,
			password: passwordRef.current.value ? passwordRef.current.value : null,
			is_locked: passwordRef.current.value ? true : false,
			user_id: user.id,
		};
	}
	async function submitHandler() {
		if (authorRef.current.value && messageRef.current.value) {
			const data = getCommentData();
			await insertRow(data);
		} else {
			alert('작성자와 메세지를 작성해주세요.');
		}
	}
	const buttonClickHandler = useCallback(async () => await signInOAuthUser(), []);

	useEffect(() => {
		const userInfo = JSON.parse(window.localStorage.getItem('user'));
		setUser(userInfo);
	}, []);
	return (
		<form action="" className="mt-3 text-xs relative bg-white/60 rounded-md opacity-100 p-3">
			{!isAuthorized && <FormCover className="hover:bg-white/80" buttonClickHandler={buttonClickHandler} />}
			<div className=" grid grid-cols-[7fr_3fr] gap-5 ">
				<div className="p-3">
					<Label htmlFor="author-name">작성자</Label>
					<input
						id="author-name"
						// placeholder="누구신가요?"
						placeholder="              "
						maxLength={15}
						className="underline decoration-[0.09rem] bg-transparent focus:bg-white"
						required
						ref={authorRef}
					/>
				</div>
				<div className="p-2">
					<Label htmlFor="date">날짜</Label>
					<time id="date" className="underline decoration-[0.09rem] " ref={dateRef}>
						{time}
					</time>
				</div>
			</div>
			<div className="grid grid-cols-[7fr_3fr] gap-5">
				<div className="p-2">
					<Label htmlFor="input--message">메세지</Label>
					<textarea
						className="w-full underline decoration-[0.09rem] border border-solid p-2 bg-transparent focus:bg-white "
						// placeholder="메세지를 입력해주세요"
						rows={2}
						minLength={1}
						maxLength={100}
						required
						id="input--message"
						ref={messageRef}
						// onChange={}
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
					<button className=" w-full pt-10 px-2" type="submit" onClick={submitHandler}>
						<p className="border-b border-solid">보내기</p>
					</button>
				</div>
			</div>
		</form>
	);
}
