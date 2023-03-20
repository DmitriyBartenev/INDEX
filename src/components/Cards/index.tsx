import React, { useEffect, useState } from 'react';
import axios from 'axios';

import { baseURL } from '../../config/server';

import { ICard } from '../../models/ICard';

import CardItem from './CardItem';

import { StyledCards } from './styles';

const Cards: React.FC = () => {
	const [cards, setCards] = useState<ICard[]>();

	const getCards = async () => {
		try {
			const response = await axios.get(baseURL + '/v1/items');

			setCards(response.data.items);
		} catch (error) {
			console.log(error);
		}
	};

	useEffect(() => {
		getCards();
	}, []);

	return (
		<StyledCards>
			{cards?.map((card) => (
				<CardItem key={card.id} {...card} />
			))}
		</StyledCards>
	);
};

export default Cards;
