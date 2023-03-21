import React from 'react';

import { ICard } from '../../models/ICard';
import { ILayout } from '../../models/ILayout';

import CardItem from './CardItem';
import { SkeletonCard, cardsSkeletons } from '../Skeletons/Cards';

import { StyledCardsList } from './styles';

interface CardsListProps {
	loading: boolean;
	newItemLoading: boolean;
	activeLayout: ILayout;
	cards: ICard[];
}

const CardsList: React.FC<CardsListProps> = ({
	loading,
	newItemLoading,
	activeLayout,
	cards,
}) => {
	return (
		<StyledCardsList>
			{loading && !newItemLoading
				? cardsSkeletons.map((item) => (
						<SkeletonCard key={item.id} activeLayout={activeLayout} />
				  ))
				: cards?.map((card) => (
						<CardItem key={card.id} {...card} activeLayout={activeLayout} />
				  ))}
		</StyledCardsList>
	);
};

export default CardsList;
