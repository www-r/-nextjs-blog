import { memo } from 'react';
import CommentListItem from '@components/CommentListItem';
import { CommentData } from '@/types';

function CommentsContainer({ dataArr }) {
	return (
		<ul>
			{dataArr.length !== 0
				? dataArr?.map((data: CommentData) => <CommentListItem data={data} key={data.id} />)
				: '메세지가 없습니다.'}
		</ul>
	);
}
export default memo(CommentsContainer);
