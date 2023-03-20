export const dateConverter = (dateString: string) => {
	const date = new Date(dateString.split(' ')[0]);

	if (isNaN(date.getTime())) {
		throw new Error('Invalid date string');
	}

	return date.toLocaleDateString() + ', ' + date.toLocaleTimeString();
};
