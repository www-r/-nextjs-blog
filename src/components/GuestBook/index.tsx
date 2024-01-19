import Form from '@components/Form';
import CommentListItem from '@components/CommentListItem';
import { getDatabaseData } from '@/service/supabase';

export default async function GuestBook() {
	const dataArr = await getDatabaseData();
	return (
		<div className="font-guestbook inner">
			<h2 className="text-2xl mt-10 border-b border-solid">Guest Book</h2>
			<Form />
			<div className=" mt-5  h-[50vh] p-3 overflow-auto">
				<ul>{dataArr?.map((data) => <CommentListItem data={data} key={data.id} />)}</ul>
			</div>
		</div>
	);
}
