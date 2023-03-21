import React from 'react';
import { Helmet } from 'react-helmet';

import SingleCard from '../components/SingleCard';

const SingleCardPage: React.FC = () => {
	return (
		<>
			<Helmet>
				<meta name="Application for Guru Group" content="Test Application" />
				<title>Card Page</title>
			</Helmet>
			<SingleCard />
		</>
	);
};

export default SingleCardPage;
