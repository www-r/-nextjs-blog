import Icon from '../Icon';
import Locked from '@/assets/lock.svg';
import LockOpened from '@/assets/lock_open.svg';
import { CommentData } from '@/types';

interface Props {
	data: CommentData;
}

export default function CommentListItem({ data }: Props) {
	return (
		<li className=" border border-solid rounded-sm border-pink p-4 mx-2 my-1">
			<div className="grid grid-cols-[7fr_3fr] text-[2.3rem]">
				<div className="flex">
					<p className="mr-2">{data.author}</p>
					{data.is_locked ? <Icon src={Locked} alt="locked" size={18} /> : <></>}
				</div>
				<div>{data.created_at}</div>
			</div>
			<div className="text-xl">{data.message}</div>
		</li>
	);
}
