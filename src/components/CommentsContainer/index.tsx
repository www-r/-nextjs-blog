import { memo } from 'react';
import CommentListItem from '../CommentListItem';
function CommentsContainer({ dataArr }) {
	return (
		<ul>{dataArr.length !== 0 ? dataArr?.map((data) => <CommentListItem data={data} key={data.id} />) : 'loading'}</ul>
	);
}
export default memo(CommentsContainer);
