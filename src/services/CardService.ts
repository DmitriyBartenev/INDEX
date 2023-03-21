import { useState } from 'react';
import { ICard } from '../models/ICard';
import axios from 'axios';

const useCardService = () => {
	const _apiURL = 'https://testguru.ru/frontend-test/api/v1/items';
	const _initialPage = 1;

	const [loading, setLoading] = useState(false);
	const [error, setError] = useState(false);

	const getAllCards = async (page = _initialPage) => {
		setLoading(true);

		try {
			const response = await axios.get(`${_apiURL}?page=${page}`);

			const data = response.data.items;

			setLoading(false);
			setError(false);

			return data;
		} catch (e) {
			const result = (e as Error).message;
			console.log(result);
			setLoading(false);
			setError(true);
		}
	};

	const getCard = async (id: string) => {
		const response = await axios.get(`${_apiURL}/${id}`);

		return _transformCard(response.data);
	};

	const _transformCard = (card: ICard) => {
		return {
			id: card.id,
			seen: card.seen,
			price: card.price,
			title: card.title,
			address: card.address,
			about: card.about,
			createdAt: card.createdAt,
		};
	};

	const clearError = () => setError(false);

	return { getAllCards, getCard, loading, error, clearError };
};

export default useCardService;
