import { PropsWithChildren } from 'react';
import Link from 'next/link';
interface Props extends PropsWithChildren {
	list?: string[];
}

export default function Nav({ list = ['home', 'about', 'posts', 'contact'] }: Props) {
	return (
		<nav>
			<ul>
				{list.map((item: string) => (
					<Link href={`/${item}`} key={item}>
						<li>{item}</li>
					</Link>
				))}
			</ul>
		</nav>
	);
}
