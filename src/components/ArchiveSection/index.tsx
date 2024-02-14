import Link from 'next/link';
import Image from 'next/image';
import Section from '../common/Section';
import SubTitle from '../common/Subtitle';

export default function ArchiveSection() {
	return (
		<Section className="bg-orange flex inner">
			<h2 className="text-[2.5rem] font-extrabold py-4 px-[5rem] border-r border-solid mr-[5rem]">Archive</h2>
			<ul className="flex justify-between w-full mt-[5rem] ">
				<Link href="https://github.com/www-r">
					<li className="border border-solid mr-[3rem] mb-[2rem] bg-white  p-6 w-[35rem] text-lg font-bold">
						<p>Github</p>
						<Image
							src="https://bleyetciwkirndgevlln.supabase.co/storage/v1/object/sign/images/github.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJpbWFnZXMvZ2l0aHViLnBuZyIsImlhdCI6MTcwNzcxNDU3MCwiZXhwIjoxNzM5MjUwNTcwfQ.Nd1_PZ07-uyhs038L5uheGt_XodA1Jjg2A_w2xTAhIA&t=2024-02-12T05%3A09%3A30.395Z"
							alt=""
							width={330}
							height={300}
						></Image>
					</li>
				</Link>
				<Link href="https://woorii-kye.tistory.com">
					<li className="border-solid border mr-[3rem] mb-[2rem] bg-white  p-6 w-[35rem] text-lg font-bold">
						<p>Tistory</p>
						<Image
							src="https://bleyetciwkirndgevlln.supabase.co/storage/v1/object/sign/images/tistory.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJpbWFnZXMvdGlzdG9yeS5wbmciLCJpYXQiOjE3MDc3MTQ3MzIsImV4cCI6MTczOTI1MDczMn0._RLbqcah2pLrxo0eH2Wzy-3DBo4Y5LC04LGCaPenTYg&t=2024-02-12T05%3A12%3A13.056Z"
							alt=""
							width={330}
							height={300}
						></Image>
					</li>
				</Link>
			</ul>
		</Section>
	);
}
