import styled from 'styled-components';
import { ILayout } from '../../models/ILayout';

import { colors } from '../../styles/colors';

interface LoadMoreButtonProps {
	cardsEnded: boolean;
}

interface IsFavouriteProps {
	isFavourite: boolean;
}

interface ActiveLayoutProps {
	activeLayout: ILayout;
}

export const StyledCards = styled.main`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
`;

export const StyledCardsList = styled.div`
	width: 100%;
	height: 100%;
	padding: 26px 140px 31px 140px;
	display: flex;
	justify-content: center;
	align-items: flex-start;
	flex-wrap: wrap;
	a {
		text-decoration: none;
	}
`;

export const StyledCardItem = styled.div<ActiveLayoutProps>`
	width: ${({ activeLayout }) => (activeLayout.square ? '224px' : '472px')};
	height: ${({ activeLayout }) => (activeLayout.square ? '100%' : '134px')};
	margin: 12px;
	display: flex;
	flex-direction: ${({ activeLayout }) =>
		activeLayout.square ? 'column' : 'row'};
	justify-content: space-between;
	border-radius: 12px;
	-webkit-box-shadow: 0px 0px 16px 0px rgba(0, 0, 0, 0.08);
	-moz-box-shadow: 0px 0px 16px 0px rgba(0, 0, 0, 0.08);
	box-shadow: 0px 0px 16px 0px rgba(0, 0, 0, 0.08);
	transition: 0.2s;
	:hover {
		transform: translateY(-5px);
	}
`;

export const StyledCardSlider = styled.div<ActiveLayoutProps>`
	position: relative;
	min-width: ${({ activeLayout }) => (activeLayout.square ? '224px' : '156px')};
	height: ${({ activeLayout }) => (activeLayout.square ? '260px' : '134px')};
	img {
		border-radius: ${({ activeLayout }) =>
			activeLayout.square ? '12px 12px 0 0' : '12px 0 0 12px'};
		opacity: 0;
		width: ${({ activeLayout }) => (activeLayout.square ? '224px' : '156px')};
		height: ${({ activeLayout }) => (activeLayout.square ? '260px' : '134px')};
		object-fit: cover;
		transition: opacity ease-in-out 0.4s;
		top: 0;
		position: absolute;
	}
	.active-img {
		opacity: 1;
	}
`;

export const StyledCardBox = styled.div`
	padding: 10px 12px 19px 12px;
	width: 100%;
	height: 100%;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	p {
		margin: 10px 0;
		font-size: 14px;
		font-weight: 500;
	}
`;

export const StyledPrice = styled.div<IsFavouriteProps>`
	width: 100%;
	display: flex;
	justify-content: space-between;
	align-items: center;
	span {
		font-size: 22px;
		font-weight: 700;
		width: 100px;
	}
	button {
		display: flex;
		justify-content: center;
		align-items: center;
		border: none;
		background-color: transparent;
		svg {
			cursor: pointer;
			path {
				transition: 0.2s;
				fill: ${({ isFavourite }) =>
					isFavourite ? colors.turquoise : colors.gray};
			}
			:hover {
				path {
					fill: ${({ isFavourite }) => (isFavourite ? '' : colors.darkGray)};
				}
			}
		}
	}
`;

export const StyledCardFooter = styled.div`
	display: flex;
	justify-content: space-between;
	width: 100%;
	span {
		color: ${colors.lightGray};
		font-size: 12px;
		font-weight: 400;
		:last-child {
			text-align: right;
		}
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

export const StyledLoadMoreButton = styled.button<LoadMoreButtonProps>`
	background-color: transparent;
	border: none;
	padding: 8px 15px;
	color: ${colors.turquoise};
	font-size: 14px;
	font-weight: 500;
	cursor: pointer;
	display: ${({ cardsEnded }) => (!cardsEnded ? 'block' : 'none')};
`;

export const StyledHttpError = styled.p`
	font-size: 14px;
	font-weight: 400;
	color: ${colors.lightGray};
	margin-bottom: 10px;
`;

export const StyledSliderIndicators = styled.div`
	width: 100%;
	height: 8px;
	position: absolute;
	bottom: 10px;
	display: flex;
	justify-content: center;
	align-items: center;
	span {
		background-color: ${colors.turquoise};
		width: 8px;
		height: 8px;
		margin: 0 4px;
		border-radius: 50%;
	}
`;

export const StyledSliderActions = styled.div`
	position: absolute;
	padding: 0 10px;
	width: 100%;
	display: flex;
	justify-content: space-between;
	top: 50%;
	button {
		display: flex;
		justify-content: center;
		align-items: center;
		background-color: transparent;
		border: none;
		cursor: pointer;
		:first-child {
			transform: rotate(180deg);
		}
		svg {
			fill: #111;
			transition: 0.2s;
			:hover {
				fill: ${colors.turquoise};
			}
		}
	}
`;

export const StyledSwitchLayout = styled.div`
	display: flex;
	justify-content: flex-end;
	align-items: center;
	margin: 35px 35px 0 0;
	button {
		display: flex;
		align-items: center;
		justify-content: center;
		background-color: transparent;
		border: none;
		cursor: pointer;
		:last-child {
			margin-left: 16px;
		}
		rect {
			transition: 0.2s;
		}
	}
`;

export const StyledSquareButton = styled.button<ActiveLayoutProps>`
	rect {
		stroke: ${({ activeLayout }) =>
			activeLayout.square ? colors.turquoise : colors.gray};
	}
	:hover {
		rect {
			stroke: ${({ activeLayout }) =>
				activeLayout.square ? '' : colors.darkGray};
		}
	}
`;

export const StyledRectangleButton = styled.button<ActiveLayoutProps>`
	rect {
		stroke: ${({ activeLayout }) =>
			activeLayout.rectangular ? colors.turquoise : colors.gray};
	}
	:hover {
		rect {
			stroke: ${({ activeLayout }) =>
				activeLayout.rectangular ? '' : colors.darkGray};
		}
	}
`;
