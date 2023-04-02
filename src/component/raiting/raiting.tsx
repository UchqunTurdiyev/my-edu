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
		const updateArray = raitingArray.map((r: JSX.Element, idx: number) => (
			<span
				key={idx}
				className={cn(styles.star, {
					[styles.filled]: idx < currantRaiting,
					[styles.editable]: isEditabled,
				})}
				onMouseEnter={() => changeRaitingDisplay(idx + 1)}
				onMouseLeave={() => changeRaitingDisplay(raiting)}
				onClick={() => clickRaitingStar(idx + 1)}
			>
				<AiFillStar />
			</span>
		));
		setRaitingArray(updateArray);
	};

	const changeRaitingDisplay = (index: number) => {
		if (!isEditabled) {
			return;
		} else {
			renderRaiting(index);
		}
	};

	const clickRaitingStar = (index: number) => {
		if (!isEditabled || !setRaiting) {
			return;
		} else {
			setRaiting(index);
		}
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
