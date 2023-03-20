import React from 'react';

import {
	StyledSkeleton,
	StyledSkeletonImage,
	StyledSkeletonBox,
	StyledSkeletonPrice,
	StyledSkeletonLike,
	StyledSkeletonBlock,
	StyledSkeletonPriceValue,
} from '../styles';

export const cardsSkeletons = [
	{ id: 1 },
	{ id: 2 },
	{ id: 3 },
	{ id: 4 },
	{ id: 5 },
	{ id: 6 },
	{ id: 7 },
	{ id: 8 },
	{ id: 9 },
	{ id: 10 },
];

export const SkeletonCard: React.FC = () => {
	return (
		<StyledSkeleton>
			<StyledSkeletonImage />
			<StyledSkeletonBox>
				<StyledSkeletonPrice>
					<StyledSkeletonPriceValue />
					<StyledSkeletonLike />
				</StyledSkeletonPrice>
				<StyledSkeletonBlock />
				<StyledSkeletonBlock />
			</StyledSkeletonBox>
		</StyledSkeleton>
	);
};
