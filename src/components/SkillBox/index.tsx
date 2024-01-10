import React from 'react';
import Image from 'next/image';
import { Skill } from '@/types';

interface Props {
	data: Skill;
}

export default function SkillBox({ data: { name, description, image } }: Props) {
	return (
		<div className="flex-cols justify-center items-center">
			<div className="w-[7rem] h-[7rem] overflow-hidden flex items-center">
				<Image src={image} alt={name} width={70} height={70} style={{ objectFit: 'cover' }} />
			</div>
			<p className="text-3xl font-bold mt-5 text-center">{name}</p>
		</div>
	);
}
