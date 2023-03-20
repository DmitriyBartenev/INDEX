import React from 'react';
import { StyledErrorMessage } from './styles';

interface ErrorMessageProps {
	title: string;
	text: string;
}

export const ErrorMessage: React.FC<ErrorMessageProps> = ({ title, text }) => {
	return (
		<StyledErrorMessage>
			<h2>{title}</h2>
			<p>{text}</p>
		</StyledErrorMessage>
	);
};
