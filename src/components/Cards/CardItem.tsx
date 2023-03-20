import React from 'react';

import { ICard } from '../../models/ICard';

import {
	StyledCardItem,
	StyledPrice,
	StyledCardFooter,
	StyledCardBox,
	StyledMessage,
} from './styles';

import FakePhoto from '../../assets/fake.png';
import { LikeIcon } from '../ui/icons/LikeIcon';

const CardItem: React.FC<ICard> = ({
	seen,
	price,
	title,
	createdAt,
	address,
}) => {
	const date = new Date(createdAt.split(' ')[0]);
	const readableDate =
		date.toLocaleDateString() + ', ' + date.toLocaleTimeString();

	return (
		<StyledCardItem>
			<img src={FakePhoto} alt="Fake Photo" width={224} height={260} />
			<StyledCardBox>
				<StyledPrice>
					<span>{Math.round(price).toLocaleString()} ₽</span>
					<LikeIcon />
				</StyledPrice>
				<p>{title}</p>
				<StyledCardFooter>
					<span>{address}</span>
					<span>{readableDate}</span>
				</StyledCardFooter>
				{seen && (
					<StyledMessage>
						<span>Просмотрено</span>
					</StyledMessage>
				)}
			</StyledCardBox>
		</StyledCardItem>
	);
};

export default CardItem;
