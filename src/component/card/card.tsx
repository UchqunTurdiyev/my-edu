import React from 'react';
import { CardProps } from './card.props';
import styles from './card.module.css';
import cn from 'classnames';

export default function Card({ children, color, className, ...props }: CardProps): JSX.Element {
	return (
		<div
			className={cn(styles.card, className, {
				[styles.primary]: color === 'primary',
			})}
			{...props}
		>
			{children}
		</div>
	);
}
