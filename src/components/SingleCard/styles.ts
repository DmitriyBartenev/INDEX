import styled from 'styled-components';

import { colors } from '../../styles/colors';

export const StyledSingleCardContainer = styled.div`
	height: 100vh;
	width: 100%;
	padding: 0 20px;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	a {
		margin-top: 12px;
		font-size: 14px;
	}
`;

export const StyledSingleCard = styled.div`
	max-width: 800px;
	max-height: 300px;
	display: flex;
	box-shadow: 0px 0px 16px 0px rgba(0, 0, 0, 0.08);
	border-radius: 0 12px 12px 0;
	transition: 0.2s;
	img {
		object-fit: cover;
		border-radius: 12px 0 0 12px;
	}
	@media (max-width: 850px) {
		flex-direction: column;
		max-width: 400px;
		max-height: 100%;
	}
`;

export const StyledSinlgeCardBox = styled.div`
	padding: 10px 12px 19px 12px;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	align-items: center;
	span {
		font-size: 22px;
		font-weight: 700;
	}
	p {
		text-align: center;
		font-size: 18px;
		margin: 6px 0;
	}
`;

export const StyledAbout = styled.p`
	overflow-y: auto;
`;

export const StyledSingleCardFooter = styled.div`
	width: 100%;
	display: flex;
	justify-content: space-between;
	span {
		font-weight: 500;
		font-size: 16px;
		color: ${colors.darkGray};
		:last-child {
			text-align: right;
		}
	}
`;
