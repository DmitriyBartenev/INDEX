import styled from 'styled-components';

import { colors } from '../../styles/colors';

export const StyledErrorMessage = styled.div`
	width: 100%;
	height: 100vh;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	text-align: center;
	h2 {
		font-size: 17px;
		font-weight: 500;
		color: ${colors.turquoise};
		margin-bottom: 9px;
		text-transform: uppercase;
	}
	p {
		color: ${colors.lightGray};
		font-size: 14px;
		max-width: 246px;
	}
`;
