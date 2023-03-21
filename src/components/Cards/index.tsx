import React, { useEffect, useState } from 'react';

import { ICard } from '../../models/ICard';
import { ILayout } from '../../models/ILayout';
import useCardService from '../../services/CardService';

import ScrollUpButton from './ScrollUpButton';
import CardButton from './CardButton';
import CardsList from './CardsList';
import SwitchLayout from './SwitchLayout';
import { HttpErrorMessage } from './HttpErrorMessage';

import { StyledCards } from './styles';

const Cards: React.FC = () => {
	const [cards, setCards] = useState<ICard[]>([]);
	const [newItemLoading, setNewItemLoading] = useState<boolean>(false);
	const [page, setPage] = useState<number>(1);
	const [cardsEnded, setCardsEnded] = useState<boolean>(false);
	const [showScroll, setShowScroll] = useState<boolean>(false);
	const [activeLayout, setActiveLayout] = useState<ILayout>({
		square: true,
		rectangular: false,
	});

	const { getAllCards, loading, error } = useCardService();

	useEffect(() => {
		onRequest(page, true);

		const data = localStorage.getItem('activeLayout');
		if (data) setActiveLayout(JSON.parse(data));

		window.addEventListener('scroll', checkScrollTop);

		return () => {
			window.removeEventListener('scroll', checkScrollTop);
		};

		// eslint-disable-next-line
	}, []);

	useEffect(() => {
		localStorage.setItem('activeLayout', JSON.stringify(activeLayout));
	});

	const checkScrollTop = () => {
		if (window.scrollY > 100) {
			setShowScroll(true);
		} else {
			setShowScroll(false);
		}
	};

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

	return (
		<>
			<SwitchLayout
				loading={loading}
				newItemLoading={newItemLoading}
				activeLayout={activeLayout}
				setActiveLayout={setActiveLayout}
			/>
			<StyledCards>
				<CardsList
					loading={loading}
					newItemLoading={newItemLoading}
					activeLayout={activeLayout}
					cards={cards}
				/>
				{error && <HttpErrorMessage title="Ошибка при загрузке" />}
				<CardButton
					loading={loading}
					newItemLoading={newItemLoading}
					onRequest={onRequest}
					page={page}
					cardsEnded={cardsEnded}
					error={error}
				/>
			</StyledCards>
			{showScroll && <ScrollUpButton />}
		</>
	);
};

export default Cards;
