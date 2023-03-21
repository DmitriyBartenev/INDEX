import React from 'react';

import { Spinner } from '../Spinner';
import { SkeletonButton } from '../Skeletons/Buttons';

import { StyledLoadMoreButton } from './styles';

interface CardButtonProps {
	newItemLoading: boolean;
	cardsEnded: boolean;
	loading: boolean;
	error: boolean;
	page: number;
	onRequest: (page: number, initial?: boolean) => void;
}

const CardButton: React.FC<CardButtonProps> = ({
	cardsEnded,
	error,
	loading,
	newItemLoading,
	onRequest,
	page,
}) => {
	if (loading && !newItemLoading) {
		return <SkeletonButton />;
	} else if (loading && newItemLoading) {
		return <Spinner />;
	}

	return (
		<StyledLoadMoreButton
			onClick={() => onRequest(page)}
			cardsEnded={cardsEnded}
		>
			{error ? 'Повторить попытку' : 'Показать еще'}
		</StyledLoadMoreButton>
	);
};

export default CardButton;
