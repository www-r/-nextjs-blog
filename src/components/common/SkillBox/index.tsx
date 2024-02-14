import Image from 'next/image';
import { Skill } from '@/types';

interface Props {
	skill: Skill;
}

export default function SkillBox({ skill }: Props) {
	return (
		<div className="flex-cols justify-center items-center">
			<div className="w-[7rem] h-[7rem] overflow-hidden flex items-center">
				<Image src={skill.image} alt={skill.name} width={70} height={70} style={{ objectFit: 'cover' }} />
			</div>
			<p className="text-sm font-bold mt-5 text-center">{skill.name}</p>
		</div>
	);
}
