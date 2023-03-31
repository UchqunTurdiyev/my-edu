import React from 'react';
import { ButtonProps } from './button.props';
import styles from './button.module.css';
import cn from 'classnames';
import { AiOutlineRight } from 'react-icons/ai';

function Button({ appearace, arrow = 'none', children, ...props }: ButtonProps): JSX.Element {
	return (
		<button
			className={cn(styles.button, {
				[styles.primary]: appearace === 'primary',
				[styles.ghost]: appearace === 'ghost',
			})}
			{...props}
		>
			{children}

			{arrow !== 'none' && (
				<span
					className={cn(styles.arrow, {
						[styles.down]: arrow === 'down',
					})}
				>
					<AiOutlineRight />
				</span>
			)}
		</button>
	);
}

export default Button;
