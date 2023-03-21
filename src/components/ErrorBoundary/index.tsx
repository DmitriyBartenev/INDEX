import React from 'react';
import { ErrorMessage } from '../ErrorMessage';

interface Props {
	children: React.ReactNode;
}

interface State {
	hasError: boolean;
}

class ErrorBoundary extends React.Component<Props> {
	state: State = {
		hasError: false,
	};

	componentDidCatch(error: Error, errorInfo: React.ErrorInfo): void {
		console.log('Uncaught error:', error, errorInfo);
		this.setState({
			hasError: true,
		});
	}

	render() {
		if (this.state.hasError) {
			return (
				<ErrorMessage
					title="Объявлений не найдено"
					text="Простите, по вашему запросу товаров сейчас нет. Задайте запрос по-другому или измените характеристики"
				/>
			);
		}
		return this.props.children;
	}
}

export default ErrorBoundary;
