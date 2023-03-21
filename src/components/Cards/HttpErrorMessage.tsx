import React from 'react';

import { StyledHttpError } from './styles';

interface HttpErrorMessageProps {
	title: string;
}

export const HttpErrorMessage: React.FC<HttpErrorMessageProps> = ({
	title,
}) => {
	return <StyledHttpError>{title}</StyledHttpError>;
};
