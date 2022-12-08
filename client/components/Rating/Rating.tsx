import { RatingProps } from "./Rating.props";
import { useState, useEffect } from "react";
import StarIcon from "./Star.svg";
import styles from "./Rating.module.css";
import cn from "classnames";


export const Rating = ({ isEdit = false, rating, setRating, ...props }: RatingProps): JSX.Element => {
	const [ratingArray, setRatingArray] = useState<JSX.Element[]>(new Array(5).fill(<></>));

	useEffect(() => {
		constructRating(rating);
	}, [rating]);


	const constructRating = (currentRating: number) => {
		const updateArray = ratingArray.map((r: JSX.Element, i: number) => {
			return (
				<StarIcon
					onMouseEnter={() => changeDisplay(i + 1)}
					onMouseLeave={() => changeDisplay(rating)}
					onClick={() => onClick(i + 1)}
					className={cn(styles.star, {
						[styles.filled]: i < currentRating,
						[styles.edit]: isEdit
					})}/>
			);
		});
		setRatingArray(updateArray);
	};

	const changeDisplay = (i: number) => {
		if (!isEdit) return;
		constructRating(i);
	};

	const onClick = (i: number) => {
		if (!isEdit || !setRating) return;
		setRating(i);
	};

	return <div {...props}>
		{ratingArray.map((r, i) => (
			<span key={i}>{r}</span>
		))}
	</div>;
};

