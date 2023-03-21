import { ICard } from '../models/ICard';
import { useHttp } from '../hooks/useHttp';

const useCardService = () => {
	const _apiURL = 'https://testguru.ru/frontend-test/api/v1/items';
	const _initialPage = 1;

	const { clearError, error, loading, getRequest } = useHttp();

	const getAllCards = async (page = _initialPage) => {
		const response = await getRequest(`${_apiURL}?page=${page}`);

		return response.items;
	};

	const getCard = async (id: string) => {
		const response = await getRequest(`${_apiURL}/${id}`);

		return _transformCard(response);
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

	return { getAllCards, getCard, loading, error, clearError };
};

export default useCardService;
