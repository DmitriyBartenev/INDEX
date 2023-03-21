import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import { ICard } from '../../models/ICard';
import { ILayout } from '../../models/ILayout';
import { dateConverter } from '../../helpers/dateConverter';

import CardSlider from './Slider';

import {
	StyledCardItem,
	StyledPrice,
	StyledCardFooter,
	StyledCardBox,
} from './styles';

import { LikeIcon } from '../ui/icons/LikeIcon';

interface CardItemProps {
	activeLayout: ILayout;
}

const CardItem: React.FC<ICard & CardItemProps> = ({
	seen,
	price,
	title,
	createdAt,
	address,
	activeLayout,
	id,
}) => {
	const [isFavourite, setFavourite] = useState<boolean>(false);

	return (
		<StyledCardItem activeLayout={activeLayout}>
			<CardSlider activeLayout={activeLayout} seen={seen} />
			<StyledCardBox>
				<div>
					<StyledPrice isFavourite={isFavourite}>
						<span>{Math.round(price).toLocaleString()} ₽</span>
						<button onClick={() => setFavourite(!isFavourite)}>
							<LikeIcon />
						</button>
					</StyledPrice>
					<Link to={`/${id}`}>
						<p>{title}</p>
					</Link>
				</div>
				<StyledCardFooter>
					<span>{address}</span>
					<span>{dateConverter(createdAt)}</span>
				</StyledCardFooter>
			</StyledCardBox>
		</StyledCardItem>
	);
};

export default CardItem;
