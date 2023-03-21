import React from 'react';

import { StyledScrollUpButton } from './styles';

import { ScrollUpIcon } from '../ui/icons/ScrollUpIcon';

const ScrollUpButton: React.FC = () => {
	const scrollTop = () => {
		window.scrollTo({ top: 0, behavior: 'smooth' });
	};

	return (
		<StyledScrollUpButton onClick={scrollTop}>
			{<ScrollUpIcon />} Вверх
		</StyledScrollUpButton>
	);
};

export default ScrollUpButton;
