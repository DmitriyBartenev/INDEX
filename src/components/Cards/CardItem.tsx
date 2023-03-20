import React from 'react';

import { ICard } from '../../models/ICard';
import { dateConverter } from '../../helpers/dateConverter';

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
					<span>{dateConverter(createdAt)}</span>
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
