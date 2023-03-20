import React, { useEffect, useState } from 'react';

import { ICard } from '../../models/ICard';
import CardService from '../../services/CardService';

import { Spinner } from '../Spinner';
import CardItem from './CardItem';

import {
	StyledCards,
	StyledCardsList,
	StyledLoadMoreButton,
	StyledHttpError,
} from './styles';

const Cards: React.FC = () => {
	const [cards, setCards] = useState<ICard[]>([]);
	const [newItemLoading, setNewItemLoading] = useState(false);
	const [page, setPage] = useState(1);
	const [cardsEnded, setCardsEnded] = useState(false);

	const { getAllCards, loading, error } = CardService();

	useEffect(() => {
		onRequest(page, true);
		// eslint-disable-next-line
	}, []);

	const onRequest = (page: number, initial?: boolean) => {
		initial ? setNewItemLoading(false) : setNewItemLoading(true);
		getAllCards(page).then(onCardsListLoaded);
	};

	const onCardsListLoaded = (newCardsList: ICard[]) => {
		let ended = false;
		if (page === 10) {
			ended = true;
		}

		setCards((prevState) => [...prevState, ...newCardsList]);
		setNewItemLoading((_) => false);
		setPage((prevPage) => prevPage + 1);
		setCardsEnded((_) => ended);
	};

	const httpError = error ? (
		<StyledHttpError>Ошибка при загрузке</StyledHttpError>
	) : null;

	return (
		<StyledCards>
			<StyledCardsList>
				{cards?.map((card) => (
					<CardItem key={card.id} {...card} />
				))}
			</StyledCardsList>
			{loading && newItemLoading ? (
				<Spinner />
			) : !cardsEnded ? (
				<StyledLoadMoreButton onClick={() => onRequest(page)}>
					Показать еще
				</StyledLoadMoreButton>
			) : null}
			{httpError}
		</StyledCards>
	);
};

export default Cards;
