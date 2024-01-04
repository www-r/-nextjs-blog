import { PropsWithChildren } from 'react';
import Link from 'next/link';
interface Props extends PropsWithChildren {
	list?: string[];
}

export default function Nav({ list = ['home', 'about', 'posts', 'contact'] }: Props) {
	return (
		<nav>
			<ul className="flex justify-evenly">
				{list.map((item: string) => (
					<Link href={`/${item}`} key={item}>
						<li className="p-[1rem]">{item}</li>
					</Link>
				))}
			</ul>
		</nav>
	);
}
