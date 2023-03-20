import React from 'react';
import Cards from './components/Cards';
import ErrorBoundary from './components/ErrorBoundary';

const App: React.FC = () => {
	return (
		<ErrorBoundary>
			<Cards />
		</ErrorBoundary>
	);
};

export default App;
