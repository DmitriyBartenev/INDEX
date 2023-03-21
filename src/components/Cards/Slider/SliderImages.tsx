import React from 'react';

import { ISliderImage } from '../../../models/ISliderImage';

interface SliderImagesProps {
	currentIndex: number;
}

const SliderImages: React.FC<SliderImagesProps> = ({ currentIndex }) => {
	const images: ISliderImage[] = [
		{ id: 1, src: 'https://source.unsplash.com/random/300x300' },
		{ id: 2, src: 'https://source.unsplash.com/random/400x400' },
		{ id: 3, src: 'https://source.unsplash.com/random/500x500' },
		{ id: 4, src: 'https://source.unsplash.com/random/600x600' },
	];

	return (
		<>
			{images.map((item, index) => (
				<img
					src={item.src}
					key={item.id}
					alt="unsplashPhoto"
					width={224}
					height={260}
					draggable={false}
					className={currentIndex === index ? 'active-img' : ''}
				/>
			))}
		</>
	);
};

export default SliderImages;
