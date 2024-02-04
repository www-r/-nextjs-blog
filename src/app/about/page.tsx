import Image from 'next/image';
// import Link from 'next/link';
import Page from '@/components/common/Page';
import Section from '@/components/common/Section';
import SubTitle from '@/components/common/Subtitle';
// import Slider from '@/components/Slider';
import FlipCard from '@/components/common/FlipCard';
import Button from '@components/Button';
import { Books, Graduation, Cat, Increasing } from '@/assets';
import { SUBTITLE } from '@/constants';

export default async function AboutPage() {
	return (
		<Page className="bg-ivory">
			<Section>
				<SubTitle>{SUBTITLE.about}</SubTitle>
				<div className="inner grid grid-cols-2 ">
					<div className="flex-cols items-center p-8 ">
						<Image
							className=""
							src="/profile-1.jpeg"
							alt="Profile Picture"
							width={600}
							height={400}
							style={{ objectFit: 'cover', objectPosition: 'center' }}
						/>
						<p className="text-sm mt-5 w-full py-5 px-5 leading-loose">
							협업과 성장을 중요하게 생각하고, 팀으로써 같이 해결책을 모색하고 디벨롭하는 과정을 즐깁니다.
							<br />
							공부한 내용과 경험을 저만의 언어로 재구성하여 블로그에서 공유하고 있습니다. <br />
							다양한 관점(시각)에서 사고할 수 있는 개발자가 되고 싶습니다.
							<br />
						</p>

						<img src="https://ghchart.rshah.org/www-r" className="my-5" />
						{/* <div className="w-full flex justify-center gap-[10rem] mt-5">
							<Button message={BUTTON.resume} type="resume" href={URL.resume} className="w-[15rem]" />
							<Button message={BUTTON.letter} type="letter" href={URL.letter} className="w-[15rem]" />
						</div> */}
					</div>
					<div className="grid grid-cols-2 grid-rows-2 gap-y-8 p-8 ">
						<FlipCard img={Increasing} title="Profile">
							<p>
								이름
								<br />
								김영은
							</p>
							<p>
								생년월일
								<br />
								1998.08.28
							</p>
							<p>
								주소
								<br />
								서울특별시 용산구 이촌동
							</p>
							<p>
								MBTI
								<br />
								INTP , ENTP 그 사이 어딘가
							</p>
						</FlipCard>
						<FlipCard img={Graduation} title="Education">
							<div>
								<p>서울여자대학교</p>
								<p>2017.3 ~ 2020.9</p>
								<p>일어일문학과 전공</p>
							</div>
							<div>
								<p>패스트캠퍼스 KDT 프론트엔드 중급 4기 </p>
								<p>2022.12 ~ 2023.6</p>
								<p></p>
							</div>
							<div>
								<p>우아한테크코스 6기 프리코스</p>
								<p>2023.10 ~ 2023.11</p>
								<p></p>
							</div>
						</FlipCard>
						<FlipCard img={Cat} title="후추&고로">
							<Image src="/cats.png" alt="Goro & Hoochu" width={250} height={250} style={{ objectFit: 'contain' }} />
						</FlipCard>

						<FlipCard img={Books} title="Certification">
							<ul>
								<li>
									<span>토익 895</span>
									{/* <Link href={URL.tistory}>
										<Image src={Tistory} alt="Tistory Logo" width={200} height={100} className="bg-white" />
									</Link> */}
								</li>
								<li>
									<span>SQLD 진행 중</span>
									{/* <Link href={URL.naver}>
										<Image src={Naver} alt="Naver Blog Logo" width={200} height={100} />
									</Link> */}
									<p></p>
								</li>
							</ul>
						</FlipCard>
					</div>
				</div>
			</Section>
		</Page>
	);
}
