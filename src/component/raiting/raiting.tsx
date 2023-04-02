import React, { useState, useEffect } from 'react';
import { RaitingProps } from './raiting.props';
import styles from './raiting.module.css';
import cn from 'classnames';
import { AiFillStar } from 'react-icons/ai';

const Raiting = ({ raiting, isEditabled = false, setRaiting, ...props }: RaitingProps): JSX.Element => {
	const [raitingArray, setRaitingArray] = useState<JSX.Element[]>(new Array(5).fill(<></>));

	useEffect(() => {
		renderRaiting(raiting);
		//eslint-disable-next-line
	}, [raiting]);

	const renderRaiting = (currantRaiting: number) => {
		const updateArray = raitingArray.map((raiting: JSX.Element, idx: number) => (
			<span
				key={idx}
				className={cn(styles.star, {
					[styles.filled]: idx < currantRaiting,
				})}
			>
				<AiFillStar />
			</span>
		));
		setRaitingArray(updateArray);
	};

	return (
		<div className={styles.raiting} {...props}>
			{raitingArray.map((raiting, idx) => (
				<span key={idx}>{raiting}</span>
			))}
		</div>
	);
};
export default Raiting;
