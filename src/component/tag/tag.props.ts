import { ReactNode, DetailedHTMLProps, ButtonHTMLAttributes } from 'react';
export interface TagProps extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLDivElement>, HTMLDivElement> {
	size?: 's' | 'm';
	color?: 'red' | 'green' | 'primary';
	children: ReactNode;
}
