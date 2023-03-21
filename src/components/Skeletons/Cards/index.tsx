import React from 'react';
import { ILayout } from '../../../models/ILayout';

import {
	StyledSkeleton,
	StyledSkeletonImage,
	StyledSkeletonBox,
	StyledSkeletonPrice,
	StyledSkeletonLike,
	StyledSkeletonBlock,
	StyledSkeletonPriceValue,
	StyledSliderSkeleton,
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

interface SkeletonCardProps {
	activeLayout: ILayout;
}

export const SkeletonCard: React.FC<SkeletonCardProps> = ({ activeLayout }) => {
	return (
		<StyledSkeleton activeLayout={activeLayout}>
			<StyledSkeletonImage activeLayout={activeLayout}>
				<StyledSliderSkeleton />
			</StyledSkeletonImage>
			<StyledSkeletonBox activeLayout={activeLayout}>
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
