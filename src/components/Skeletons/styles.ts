import styled, { keyframes } from 'styled-components';

import { colors } from '../../styles/colors';

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

export const StyledSkeleton = styled.span`
	width: 224px;
	height: 364px;
	margin: 12px;
	animation: ${pulse} 2s linear infinite;
`;

export const StyledSkeletonImage = styled.div`
	width: 100%;
	height: 260px;
	background-color: ${colors.skeleton};
	border-radius: 12px 12px 0 0;
`;

export const StyledSkeletonBox = styled.span`
	background-color: ${colors.skeletonLightGray};
	height: 104px;
	border-radius: 0 0 12px 12px;
	display: flex;
	flex-direction: column;
	padding: 10px 12px 19px 12px;
`;

export const StyledSkeletonPrice = styled.span`
	width: 100%;
	display: flex;
	justify-content: space-between;
`;

export const StyledSkeletonPriceValue = styled.span`
	background-color: ${colors.skeleton};
	width: 166px;
	height: 25px;
	border-radius: 8px;
`;

export const StyledSkeletonLike = styled.span`
	background-color: ${colors.skeleton};
	border-radius: 8px;
	width: 25px;
	height: 25px;
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
