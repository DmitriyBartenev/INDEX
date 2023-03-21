import React, { useEffect, useState } from 'react';

import { ICard } from '../../models/ICard';
import { ILayout } from '../../models/ILayout';
import CardService from '../../services/CardService';
import { SkeletonCard, cardsSkeletons } from '../Skeletons/Cards';
import { SkeletonButton } from '../Skeletons/Buttons';

import { Spinner } from '../Spinner';
import CardItem from './CardItem';

import {
	StyledCards,
	StyledCardsList,
	StyledLoadMoreButton,
	StyledHttpError,
	StyledSwitchLayout,
	StyledSquareButton,
	StyledRectangleButton,
} from './styles';
import {
	RectangleCardLayout,
	SquareCardLayout,
} from '../ui/icons/SwitchLayout';

const Cards: React.FC = () => {
	const [cards, setCards] = useState<ICard[]>([]);
	const [newItemLoading, setNewItemLoading] = useState(false);
	const [page, setPage] = useState(1);
	const [cardsEnded, setCardsEnded] = useState(false);
	const [activeLayout, setActiveLayout] = useState<ILayout>({
		square: true,
		rectangular: false,
	});

	const { getAllCards, loading, error } = CardService();

	useEffect(() => {
		onRequest(page, true);
		const data = localStorage.getItem('activeLayout');
		if (data) setActiveLayout(JSON.parse(data));

		// eslint-disable-next-line
	}, []);

	useEffect(() => {
		localStorage.setItem('activeLayout', JSON.stringify(activeLayout));
	});

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

	const httpError = error && (
		<StyledHttpError>Ошибка при загрузке</StyledHttpError>
	);

	return (
		<>
			<StyledSwitchLayout>
				<StyledSquareButton
					onClick={() =>
						setActiveLayout((prevState) => ({
							...prevState,
							square: true,
							rectangular: false,
						}))
					}
					activeLayout={activeLayout}
				>
					<SquareCardLayout />
				</StyledSquareButton>
				<StyledRectangleButton
					onClick={() =>
						setActiveLayout((prevState) => ({
							...prevState,
							square: false,
							rectangular: true,
						}))
					}
					activeLayout={activeLayout}
				>
					<RectangleCardLayout />
				</StyledRectangleButton>
			</StyledSwitchLayout>
			<StyledCards>
				<StyledCardsList>
					{loading && !newItemLoading
						? cardsSkeletons.map((item) => <SkeletonCard key={item.id} />)
						: cards?.map((card) => (
								<CardItem key={card.id} {...card} activeLayout={activeLayout} />
						  ))}
				</StyledCardsList>
				{httpError}
				{loading && !newItemLoading ? (
					<SkeletonButton />
				) : loading && newItemLoading ? (
					<Spinner />
				) : (
					<StyledLoadMoreButton
						onClick={() => onRequest(page)}
						cardsEnded={cardsEnded}
					>
						{httpError ? 'Повторить попытку' : 'Показать еще'}
					</StyledLoadMoreButton>
				)}
			</StyledCards>
		</>
	);
};

export default Cards;
