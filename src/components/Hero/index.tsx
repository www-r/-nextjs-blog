import Image from 'next/image';
import Link from 'next/link';
import Button from '../Button';
import heroImage from '../../../images/hero.jpeg';
import { PROFILE_TEXT, BUTTON } from '@/constants';
export default function Hero() {
	return (
		<section className="align-center">
			<Image
				src={heroImage}
				alt=""
				className={`rounded-full overflow-hidden object-cover content-center`}
				width={400}
			/>
			<div className="text-[2rem] p-[1.25rem_0_0_0]">
				{PROFILE_TEXT.main.map((item) => (
					<p className="text-center" key={item}>
						{item}
					</p>
				))}
			</div>
			<div>
				<Link href="/contact">
					<button className="button bg-[green] text-[1.5rem] ">{BUTTON.contact}</button>
				</Link>
				<Link href="https://www.canva.com/design/DAFqWZuH5C4/A_tOPzv6vXALk6UKqosuew/view?utm_content=DAFqWZuH5C4&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink">
					<button className="button bg-[green] text-[1.5rem] ">{BUTTON.resume}</button>
				</Link>
				<Link href="https://www.canva.com/design/DAF3ANc0gTw/F-_8o3304Rur1YU7k7eXRQ/view?utm_content=DAF3ANc0gTw&utm_campaign=designshare&utm_medium=link&utm_source=editor">
					<button className="button bg-[green] text-[1.5rem] ">{BUTTON.letter}</button>
				</Link>
			</div>
		</section>
	);
}
