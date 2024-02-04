import './styles.css';
import { ComponentProps } from 'react';

interface Props extends ComponentProps<'button'> {}

export default function InteractiveBtn({ children, onClick }: Props) {
	return (
		<button className="learn-more" onClick={onClick}>
			{children}
		</button>
	);
}
