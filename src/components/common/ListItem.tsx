import React, { ComponentProps } from 'react';

interface Props extends ComponentProps<'li'> {}
export default function ListItem({ children, ...props }: Props) {
	return <li {...props}>{children}</li>;
}
