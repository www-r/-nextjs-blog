import { ComponentProps } from 'react';
import Link from 'next/link';
import { PATH_NAME } from '@/constants';

interface Props extends ComponentProps<'nav'> {
	list?: string[];
}

export default function Nav({ ...props }: Props) {
	const linksArr = [PATH_NAME.home, PATH_NAME.about, PATH_NAME.projects, PATH_NAME.guestbook];

	return (
		<nav {...props}>
			<ul className="flex-row--evenly">
				{linksArr.map((link) => {
					const pathname = link === PATH_NAME.home ? '' : link;
					const clickHandler = (link: string) => {
						if (link === PATH_NAME.home) {
							window.scrollTo(0, 0);
						}
					};
					return (
						<Link href={`/${pathname}`} key={link} onClick={() => clickHandler(link)}>
							<li className="p-4 sm:text-vw-sm 2xl:text-xl font-header hover:text-[orange]">{link}</li>
						</Link>
					);
				})}
			</ul>
		</nav>
	);
}
