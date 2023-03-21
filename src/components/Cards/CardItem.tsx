import React, { useState } from 'react';

import { ICard } from '../../models/ICard';
import { ILayout } from '../../models/ILayout';
import { dateConverter } from '../../helpers/dateConverter';

import {
	StyledCardItem,
	StyledPrice,
	StyledCardFooter,
	StyledCardBox,
	StyledMessage,
	StyledSliderIndicators,
	StyledSliderActions,
	StyledCardSlider,
} from './styles';

import { LikeIcon } from '../ui/icons/LikeIcon';
import { SliderArrow } from '../ui/icons/SliderArrow';

interface CardItemProps {
	activeLayout: ILayout;
}

const CardItem: React.FC<ICard & CardItemProps> = ({
	seen,
	price,
	title,
	createdAt,
	address,
	activeLayout,
}) => {
	const [currentIndex, setCurrentIndex] = useState(0);
	const [isFavourite, setFavourite] = useState<boolean>(false);

	const images = [
		{ id: 1, src: 'https://source.unsplash.com/random/300x300' },
		{ id: 2, src: 'https://source.unsplash.com/random/400x400' },
		{ id: 3, src: 'https://source.unsplash.com/random/500x500' },
		{ id: 4, src: 'https://source.unsplash.com/random/600x600' },
	];

	const dotStyles = Array.from({ length: 4 }, (_, i) => {
		return {
			backgroundColor: currentIndex === i ? '#00A0AB' : '#C7C7C7',
		};
	});

	const swipeNext = () => {
		setCurrentIndex((prevState) => (prevState + 1) % 4);
	};

	const swipePrev = () => {
		setCurrentIndex((prevState) => (prevState + 4 - 1) % 4);
	};

	return (
		<StyledCardItem activeLayout={activeLayout}>
			<StyledCardSlider activeLayout={activeLayout}>
				{images.map((item, index) => (
					<img
						src={item.src}
						key={item.id}
						alt="randomPhotos"
						width={224}
						height={260}
						draggable={false}
						className={currentIndex === index ? 'active-img' : ''}
					/>
				))}
				{seen && (
					<StyledMessage>
						<span>Просмотрено</span>
					</StyledMessage>
				)}
				<StyledSliderIndicators>
					{dotStyles.map((style, id) => (
						<span key={id} style={style} />
					))}
				</StyledSliderIndicators>
				<StyledSliderActions>
					<button onClick={swipePrev}>
						<SliderArrow />
					</button>
					<button onClick={swipeNext}>
						<SliderArrow />
					</button>
				</StyledSliderActions>
			</StyledCardSlider>
			<StyledCardBox>
				<div>
					<StyledPrice isFavourite={isFavourite}>
						<span>{Math.round(price).toLocaleString()} ₽</span>
						<button onClick={() => setFavourite(!isFavourite)}>
							<LikeIcon />
						</button>
					</StyledPrice>
					<p>{title}</p>
				</div>
				<StyledCardFooter>
					<span>{address}</span>
					<span>{dateConverter(createdAt)}</span>
				</StyledCardFooter>
			</StyledCardBox>
		</StyledCardItem>
	);
};

export default CardItem;
