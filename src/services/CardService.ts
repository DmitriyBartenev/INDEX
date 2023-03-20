import { useState } from 'react';
import axios from 'axios';

const CardService = () => {
	const _apiURL = 'https://testguru.ru/frontend-test/api/v1/items';
	const _baseOffset = 1;

	const [loading, setLoading] = useState(false);
	const [error, setError] = useState('');

	const getAllCards = async (offset = _baseOffset) => {
		setLoading(true);

		try {
			const response = await axios.get(`${_apiURL}?page=${offset}`);

			const data = response.data.items;

			setLoading(false);

			return data;
		} catch (e) {
			const result = (e as Error).message;
			setLoading(false);
			setError(result);
		}
	};

	const clearError = () => setError('');

	return { getAllCards, loading, error, clearError };
};

export default CardService;
