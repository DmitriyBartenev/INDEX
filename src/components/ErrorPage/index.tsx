import React from 'react';
import { Link } from 'react-router-dom';

import { StyledErrorPage } from './styles';

export const ErrorPage: React.FC = () => {
	return (
		<StyledErrorPage>
			<h2>Oops...there is no such page</h2>
			<Link to="/">Go back to Main Page</Link>
		</StyledErrorPage>
	);
};
