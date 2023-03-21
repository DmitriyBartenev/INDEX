import React from 'react';
import { Helmet } from 'react-helmet';

import Cards from '../components/Cards';
import ErrorBoundary from '../components/ErrorBoundary';

const MainPage: React.FC = () => {
	return (
		<>
			<Helmet>
				<meta name="Application for Guru Group" content="Test Application" />
				<title>Main Page</title>
			</Helmet>
			<ErrorBoundary>
				<Cards />
			</ErrorBoundary>
		</>
	);
};

export default MainPage;
