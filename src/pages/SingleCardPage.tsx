import React from 'react';
import { Helmet } from 'react-helmet';

const SingleCardPage: React.FC = () => {
	return (
		<>
			<Helmet>
				<meta name="Application for Guru Group" content="Test Application" />
				<title>Single Page</title>
			</Helmet>
			<div>Hello World!</div>
		</>
	);
};

export default SingleCardPage;
