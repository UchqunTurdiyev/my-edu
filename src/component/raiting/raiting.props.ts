import { DetailedHTMLProps, HTMLAttributes } from 'react';
export interface RaitingProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
	raiting: number;
	isEditabled?: boolean;
	setRaiting?: (raiting: number) => void;
}
