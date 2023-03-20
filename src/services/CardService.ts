import { useState } from 'react';
import axios from 'axios';

const CardService = () => {
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

	return { getAllCards, loading, error };
};

export default CardService;
