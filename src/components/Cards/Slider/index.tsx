import React, { useState } from 'react';

import { ILayout } from '../../../models/ILayout';

import SliderImages from './SliderImages';
import SliderButton from './SliderButton';
import SliderIndicators from './SliderIndicators';

import {
	StyledCardSlider,
	StyledMessage,
	StyledSliderActions,
} from '../styles';

interface CardSliderProps {
	activeLayout: ILayout;
	seen: boolean;
}

const CardSlider: React.FC<CardSliderProps> = ({ activeLayout, seen }) => {
	const [currentIndex, setCurrentIndex] = useState<number>(0);

	const swipeNext = () => {
		setCurrentIndex((prevState) => (prevState + 1) % 4);
	};

	const swipePrev = () => {
		setCurrentIndex((prevState) => (prevState + 4 - 1) % 4);
	};

	return (
		<StyledCardSlider activeLayout={activeLayout}>
			<SliderImages currentIndex={currentIndex} />
			{seen && (
				<StyledMessage>
					<span>Просмотрено</span>
				</StyledMessage>
			)}
			<SliderIndicators currentIndex={currentIndex} />
			<StyledSliderActions>
				<SliderButton onSlide={swipePrev} />
				<SliderButton onSlide={swipeNext} />
			</StyledSliderActions>
		</StyledCardSlider>
	);
};

export default CardSlider;
