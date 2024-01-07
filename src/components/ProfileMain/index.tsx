export default function ProfileMain() {
	return (
		<section>
			<ul className=" min-w-[40rem] flex-cols gap-[2rem] mx-auto text-center text-xl rounded-xl bg-[grey] p-10">
				<li>
					<h3 className="font-bold">PROFILE</h3>
					<ul className="gap-5">
						<li>이름 : 김영은</li>
						<li>나이 : 만 25세 (98년생)</li>
						<li>주소 : 서울 동작구 사당동</li>
					</ul>
				</li>
				<li>
					<h3 className="font-bold">EDUCATION</h3>
					<ul className="gap-5">
						<li className="">
							<h4>서울여자대학교 일어일문학과</h4>
							<span>[ 2017.3 ~ 2020.9 ]</span>
						</li>
						<li className="">
							<h4>패스트캠퍼스 프론트엔드 부트캠프 중급과정</h4>
							<span>[ 2022.12 ~ 2023.6 ]</span>
						</li>
						<li className="">
							<h4>우아한테크코스 프리코스</h4>
							<span>[ 2023.10 ~ 2023.11 ]</span>
						</li>
					</ul>
				</li>
				<li>
					<h3 className="font-bold">SKILLS</h3>
					<ul className="gap-5">
						<li>JavaScript</li>
						<li>TypeScript</li>
						<li>React</li>
						<li>Next.js</li>
						<li>Redux</li>
						<li>React Query</li>
						<li>Jest</li>
						<li>Git</li>
					</ul>
				</li>
				<li>
					<h3 className="font-bold">ARCHIVE</h3>
					<ul className="gap-5">
						<li>Github</li>
						<li>Blog</li>
					</ul>
				</li>
			</ul>
		</section>
	);
}
