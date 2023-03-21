import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';

import { dateConverter } from '../../helpers/dateConverter';
import useCardService from '../../services/CardService';
import { ICard } from '../../models/ICard';

import {
	StyledSingleCardContainer,
	StyledSingleCard,
	StyledSinlgeCardBox,
	StyledSingleCardFooter,
	StyledAbout,
} from './styles';
import { Spinner } from '../Spinner';
import { ErrorMessage } from '../ErrorMessage';

const SingleCard: React.FC = () => {
	const { id } = useParams();
	const [data, setData] = useState<ICard>();

	const { loading, error, clearError, getCard } = useCardService();

	useEffect(() => {
		updateData();
		// eslint-disable-next-line
	}, [id]);

	const updateData = () => {
		clearError();
		if (id) {
			getCard(id).then(onDataLoaded);
		}
	};

	const onDataLoaded = (data: ICard) => {
		setData(data);
	};

	if (error) {
		return (
			<ErrorMessage
				title="Объявлений не найдено"
				text="Простите, по вашему запросу товаров сейчас нет. Задайте запрос по-другому или измените характеристики"
			/>
		);
	}

	return (
		<StyledSingleCardContainer>
			{loading ? (
				<Spinner />
			) : (
				<>
					<StyledSingleCard>
						<img
							src="https://source.unsplash.com/random/600x300"
							width={400}
							height={300}
							alt="unsplashPhoto"
						/>
						<StyledSinlgeCardBox>
							<span>
								{data?.price
									? Math.round(data.price).toLocaleString()
									: 'Empty Value'}{' '}
								₽
							</span>
							<p>{data?.title}</p>
							<StyledAbout>{data?.about}</StyledAbout>
							<StyledSingleCardFooter>
								<span>{data?.address}</span>
								<span>
									{data?.createdAt
										? dateConverter(data.createdAt)
										: 'Empty Value'}
								</span>
							</StyledSingleCardFooter>
						</StyledSinlgeCardBox>
					</StyledSingleCard>
					<Link to="/">Back To MainPage</Link>
				</>
			)}
		</StyledSingleCardContainer>
	);
};

export default SingleCard;
