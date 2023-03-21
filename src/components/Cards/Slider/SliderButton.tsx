import React from 'react';

import { SliderArrow } from '../../ui/icons/SliderArrow';

interface SliderButtonProps {
	onSlide: () => void;
}

const SliderButton: React.FC<SliderButtonProps> = ({ onSlide }) => {
	return (
		<button onClick={onSlide}>
			<SliderArrow />
		</button>
	);
};

export default SliderButton;
