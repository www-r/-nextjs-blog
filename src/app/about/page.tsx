import Image from 'next/image';
import Link from 'next/link';
import Page from '@components/Page';
import AboutCover from '@/components/AboutCover';
import AboutContent from '@/components/AboutContent';
import SubTitle from '@/components/SubTitle';
import FlipCard from '@/components/FlipCard';

import { Books, Girl, Graduation, Cat, Increasing, Label, Tistory, Naver } from '@/assets';
import { URL } from '@/constants';

export default async function AboutPage() {
	return (
		<Page className="bg-ivory">
			<SubTitle>About</SubTitle>
			<div className="inner">
				<div className="grid grid-cols-3 grid-rows-2  gap-y-8 p-8">
					<FlipCard img={Girl}>
						<Image
							src="/profile.jpeg"
							alt="Profile Picture"
							width={300}
							height={300}
							style={{ objectFit: 'cover', objectPosition: 'center' }}
						/>
					</FlipCard>
					<FlipCard img={Label}>
						{
							<>
								<h5>Profile</h5>
								<div>
									<label htmlFor="profile-name">{`<이름>`}</label>
									<p id="profile-name">김영은</p>
								</div>
								<div>
									<label htmlFor="profile-age">{`<나이>`}</label>
									<p id="profile-age">만25세</p>
								</div>
								<div>
									<label htmlFor="profile-address">{`<주소>`}</label>
									<p id="profile-address">서울특별시 용산구 이촌동</p>
								</div>
								<div>
									<label htmlFor="profile-mbti">{`<MBTI>`}</label>
									<p id="profile-mbti">INTP , ENTP 그 사이 어딘가</p>
								</div>
								<div>
									<p>{`<특징>`}</p>
									<p>고양이 2마리 육아 중</p>
								</div>
							</>
						}
					</FlipCard>
					<FlipCard img={Increasing}>
						<>
							<h5>Github</h5>
							<div>
								<img src="https://ghchart.rshah.org/www-r" />
							</div>
						</>
					</FlipCard>
					<FlipCard img={Graduation}>
						{
							<>
								<h5>Educations</h5>
								<div className="flex-cols">
									<span>대학교</span>
									<span>2017.3 ~ 2020.9</span>
									<span>일어일문학과 전공</span>
								</div>
								<div>
									<span>패스트캠퍼스 KDT 프론트엔드 중급 4기 </span>
									<span>2022.12 ~ 2023.6</span>
									<p></p>
								</div>
								<div>
									<span>우아한테크코스 6기 프리코스</span>
									<span>2023.10 ~ 2023.11</span>
									<p></p>
								</div>
							</>
						}
					</FlipCard>
					<FlipCard img={Cat}>
						<Image src="/cats.png" alt="Goro & Hoochu" width={250} height={250} style={{ objectFit: 'contain' }} />
					</FlipCard>

					<FlipCard img={Books}>
						<>
							<h5>Study</h5>
							<ul>
								<span>노션</span>

								<li>
									<span>기술블로그</span>
									<Link href={URL.tistory}>
										<Image src={Tistory} alt="Tistory Logo" width={200} height={100} className="bg-white" />
									</Link>
								</li>
								<li>
									<span>개인블로그</span>
									<Link href={URL.naver}>
										<Image src={Naver} alt="Naver Blog Logo" width={200} height={100} />
									</Link>
									<p></p>
								</li>
							</ul>
						</>
					</FlipCard>
				</div>
			</div>
		</Page>
	);
}
