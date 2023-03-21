import styled, { keyframes } from 'styled-components';
import { ILayout } from '../../models/ILayout';

import { colors } from '../../styles/colors';

interface SkeletonCardProps {
	activeLayout: ILayout;
}

const pulse = keyframes`
    0%{
        opacity: 1
    }
    50%{
        opacity: 0.2;
    }
    100%{
        opacity: 1;
    }
`;

export const StyledSkeleton = styled.span<SkeletonCardProps>`
	display: flex;
	flex-direction: ${({ activeLayout }) =>
		activeLayout.square ? 'column' : 'row'};
	justify-content: space-between;
	align-items: space-between;
	width: ${({ activeLayout }) => (activeLayout.square ? '224px' : '472px')};
	height: ${({ activeLayout }) => (activeLayout.square ? '364px' : '134px')};
	margin: 12px;
	animation: ${pulse} 2s linear infinite;
	position: relative;
`;

export const StyledSkeletonImage = styled.div<SkeletonCardProps>`
	min-width: ${({ activeLayout }) => (activeLayout.square ? '224px' : '156px')};
	height: ${({ activeLayout }) => (activeLayout.square ? '260px' : '134px')};
	background-color: ${colors.skeleton};
	border-radius: ${({ activeLayout }) =>
		activeLayout.square ? '12px 12px 0 0' : '12px 0 0 12px'};
	position: relative;
	display: flex;
	justify-content: center;
	align-items: center;
`;

export const StyledSliderSkeleton = styled.span`
	position: absolute;
	background-color: ${colors.skeletonLightGray};
	width: 56px;
	border-radius: 3px;
	height: 8px;
	z-index: 1;
	bottom: 9px;
`;

export const StyledSkeletonBox = styled.span<SkeletonCardProps>`
	width: 100%;
	height: 100%;
	background-color: ${colors.skeletonLightGray};
	height: ${({ activeLayout }) => (activeLayout.square ? '104px' : '100%')};
	border-radius: ${({ activeLayout }) =>
		activeLayout.square ? '0 0 12px 12px' : '0 12px 12px 0'};
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	padding: 10px 12px 19px 12px;
`;

export const StyledSkeletonPrice = styled.span`
	width: 100%;
	display: flex;
	justify-content: space-between;
`;

export const StyledSkeletonPriceValue = styled.span`
	background-color: ${colors.skeleton};
	width: 100%;
	height: 25px;
	border-radius: 8px;
`;

export const StyledSkeletonLike = styled.span`
	background-color: ${colors.skeleton};
	border-radius: 8px;
	width: 25px;
	height: 25px;
	margin-left: 8px;
`;

export const StyledSkeletonBlock = styled.span`
	width: 100%;
	margin-top: 10px;
	height: 16px;
	background-color: ${colors.skeleton};
	border-radius: 6px;
`;

export const StyledSkeletonButton = styled.span`
	height: 32px;
	width: 125px;
	background-color: ${colors.skeleton};
	border-radius: 45px;
	animation: ${pulse} 2s linear infinite;
`;
