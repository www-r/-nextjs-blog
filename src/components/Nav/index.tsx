import { PropsWithChildren } from 'react';
import Link from 'next/link';
import { PATH_NAME } from '@/constants';

interface Props extends PropsWithChildren {
	list?: string[];
}

export default function Nav({}: Props) {
	const linksArr = [PATH_NAME.home, PATH_NAME.about, PATH_NAME.projects, PATH_NAME.contact];

	return (
		<nav>
			<ul className="flex-row--evenly">
				{linksArr.map((link) => {
					const pathname = link === PATH_NAME.home ? '' : link;
					return (
						<Link href={`/${pathname}`} key={link}>
							<li className="p-4 sm:text-[1.6vw] font-bold">{link}</li>
						</Link>
					);
				})}
			</ul>
		</nav>
	);
}
