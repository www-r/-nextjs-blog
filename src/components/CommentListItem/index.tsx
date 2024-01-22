import Icon from '../Icon';
import Locked from '@/assets/lock.svg';
import LockOpened from '@/assets/lock_open.svg';
import { CommentData } from '@/types';

interface Props {
	data: CommentData;
}

export default function CommentListItem({ data }: Props) {
	return (
		<li className=" border border-solid rounded-sm  p-4 mx-2 my-1">
			<div className="grid grid-cols-[7fr_3fr] text-xs">
				<div className="flex">
					<p className="mr-2">{data.author}</p>
					{data.is_locked ? <Icon src={Locked} alt="locked" size={18} /> : <></>}
				</div>
				<div>{data.created_at}</div>
			</div>
			<div className="text-sm" >{data.is_locked ? '메세지가 잠겨있습니다' :data.message}</div>
		</li>
	);
}
