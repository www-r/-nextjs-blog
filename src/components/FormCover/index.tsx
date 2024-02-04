import { ComponentProps } from 'react';
import InteractiveBtn from '../common/InteractiveBtn';
import useHover from '@/hooks/useHover';

interface Props extends ComponentProps<'div'> {
	buttonClickHandler: () => void;
}
export default function FormCover({ className, buttonClickHandler }: Props) {
	const [ref, hovering] = useHover();
	if (typeof ref !== 'boolean') {
		return (
			<div
				className={
					className + ' absolute z-[999]  w-full h-full top-0 left-0 center font-header bg-white/30 rounded-md '
				}
				ref={ref}
			>
				{hovering && (
					<InteractiveBtn
						onClick={buttonClickHandler}
						className="min-w-[18rem] w-[24vw] mb-[1.6rem] py-3 bg-transparent "
					>
						구글로 로그인하기
					</InteractiveBtn>
				)}
			</div>
		);
	}
}
