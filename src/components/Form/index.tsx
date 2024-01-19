'use client';
import { useState, useEffect, useRef } from 'react';
import Label from '@components/Label';
import FormCover from '@components/FormCover';
import Button from '../Button';
import { insertRow, signInOAuthUser } from '@/service/supabase';
import { formatDate } from '@/utils/formatDate';

export default function Form() {
	const time = formatDate();
	const authorRef = useRef(null);
	const dateRef = useRef(null);
	const messageRef = useRef(null);
	const passwordRef = useRef(null);
	const checkboxRef = useRef(null);
	const [isPasswordDisabled, setIsPasswordDisabled] = useState<boolean>(true);
	const [isAuthorized, setIsAuthorized] = useState<boolean>(checkIfAuthorized());

	function checkIfAuthorized() {
		if (
			window.localStorage.getItem('oauth_provider_token') &&
			window.localStorage.getItem('oauth_provider_refresh_token')
		) {
			return true;
		} else false;
	}
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
		};
	}
	async function submitHandler() {
		const data = getCommentData();
		await insertRow(data);
	}
	async function buttonClickHandler() {
		await signInOAuthUser();
	}
	useEffect(() => {}, []);
	return (
		<form action="" className="mt-3 text-lg relative">
			{!isAuthorized && (
				<FormCover>
					<Button
						onClick={buttonClickHandler}
						className="min-w-[18rem] w-[24vw] mb-[1.6rem] py-3 bg-transparent text-2xl"
					>
						로그인하기
					</Button>
				</FormCover>
			)}
			<div className=" grid grid-cols-[7fr_3fr] gap-5">
				<div className="p-2">
					<Label htmlFor="author-name">작성자</Label>
					<input
						id="author-name"
						placeholder="누구신가요?"
						maxLength={15}
						className="underline decoration-[0.09rem] text-[2.2rem]"
						required
						ref={authorRef}
					/>
				</div>
				<div className="p-2">
					<Label htmlFor="date">날짜</Label>
					<time id="date" className="underline decoration-[0.09rem] text-[2.2rem]" ref={dateRef}>
						{time}
					</time>
				</div>
			</div>
			<div className="grid grid-cols-[7fr_3fr] gap-5">
				<div className="p-2">
					<Label htmlFor="input--message">메세지</Label>
					<textarea
						className="w-full underline decoration-[0.09rem] border border-solid p-2 text-[2.2rem]"
						placeholder="메세지를 입력해주세요"
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
							className="underline decoration-[0.09rem] "
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
						<p className="border-b border-solid">등록하기</p>
					</button>
				</div>
			</div>
		</form>
	);
}
