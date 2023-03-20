import styled from 'styled-components';

import { colors } from '../../styles/colors';

export const StyledCards = styled.main`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
`;

export const StyledCardsList = styled.div`
	width: 100%;
	height: 100%;
	padding: 92px 156px 31px 156px;
	display: flex;
	justify-content: space-between;
	align-items: flex-start;
	flex-wrap: wrap;
`;

export const StyledCardItem = styled.div`
	width: 224px;
	position: relative;
	margin: 12px;
	display: flex;
	flex-direction: column;
	border-radius: 12px;
	-webkit-box-shadow: 0px 0px 16px 0px rgba(0, 0, 0, 0.08);
	-moz-box-shadow: 0px 0px 16px 0px rgba(0, 0, 0, 0.08);
	box-shadow: 0px 0px 16px 0px rgba(0, 0, 0, 0.08);
	img {
		border-radius: 12px 12px 0 0;
		width: 100%;
		pointer-events: none;
	}
`;

export const StyledCardBox = styled.div`
	padding: 10px 12px 19px 12px;
	p {
		margin: 10px 0;
		font-size: 14px;
		font-weight: 500;
	}
`;

export const StyledPrice = styled.div`
	width: 100%;
	display: flex;
	justify-content: space-between;
	align-items: center;
	span {
		font-size: 22px;
		font-weight: 700;
	}
	svg {
		cursor: pointer;
		path {
			transition: 0.2s;
			fill: ${colors.gray};
		}
		:hover {
			path {
				fill: ${colors.darkGray};
			}
		}
		:active {
			path {
				fill: ${colors.turquoise};
			}
		}
	}
`;

export const StyledCardFooter = styled.div`
	display: flex;
	justify-content: space-between;
	span {
		color: ${colors.lightGray};
		font-size: 12px;
		font-weight: 400;
	}
`;

export const StyledMessage = styled.div`
	position: absolute;
	width: 100%;
	top: 11px;
	left: 0;
	text-align: center;
	span {
		padding: 5px 8px;
		background-color: ${colors.white};
		border-radius: 8px;
		font-size: 12px;
		font-weight: 400;
		user-select: none;
	}
`;

export const StyledLoadMoreButton = styled.button`
	background-color: transparent;
	border: none;
	padding: 8px 15px;
	color: ${colors.turquoise};
	font-size: 14px;
	font-weight: 500;
	cursor: pointer;
`;

export const StyledHttpError = styled.p`
	font-size: 22px;
	font-weight: 700;
`;
