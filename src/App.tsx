import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import MainPage from './pages/MainPage';
import SingleCardPage from './pages/SingleCardPage';
import Page404 from './pages/404';

const App: React.FC = () => {
	return (
		<Router>
			<Routes>
				<Route path="/" element={<MainPage />} />
				<Route path="/id" element={<SingleCardPage />} />
				<Route path="*" element={<Page404 />} />
			</Routes>
		</Router>
	);
};

export default App;
