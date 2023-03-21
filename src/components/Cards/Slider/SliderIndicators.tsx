import React from 'react';

import { StyledSliderIndicators } from '../styles';

interface SliderIndicatorsProps {
	currentIndex: number;
}

const SliderIndicators: React.FC<SliderIndicatorsProps> = ({
	currentIndex,
}) => {
	const dotStyles = Array.from({ length: 4 }, (_, i) => {
		return {
			backgroundColor: currentIndex === i ? '#00A0AB' : '#C7C7C7',
		};
	});

	return (
		<StyledSliderIndicators>
			{dotStyles.map((style, id) => (
				<span key={id} style={style} />
			))}
		</StyledSliderIndicators>
	);
};

export default SliderIndicators;
