import React, { Dispatch, SetStateAction } from 'react';

import { ILayout } from '../../models/ILayout';
import { SkeletonSwitchButton } from '../Skeletons/Buttons';

import {
	SquareCardLayout,
	RectangleCardLayout,
} from '../ui/icons/SwitchLayout';

import {
	StyledSquareButton,
	StyledRectangleButton,
	StyledSwitchLayout,
} from './styles';

interface SwitchLayoutProps {
	loading: boolean;
	newItemLoading: boolean;
	activeLayout: ILayout;
	setActiveLayout: Dispatch<SetStateAction<ILayout>>;
}

const SwitchLayout: React.FC<SwitchLayoutProps> = ({
	loading,
	newItemLoading,
	activeLayout,
	setActiveLayout,
}) => {
	return (
		<StyledSwitchLayout>
			{loading && !newItemLoading ? (
				<SkeletonSwitchButton />
			) : (
				<>
					<StyledSquareButton
						onClick={() =>
							setActiveLayout((prevState) => ({
								...prevState,
								square: true,
								rectangular: false,
							}))
						}
						activeLayout={activeLayout}
					>
						<SquareCardLayout />
					</StyledSquareButton>
					<StyledRectangleButton
						onClick={() =>
							setActiveLayout((prevState) => ({
								...prevState,
								square: false,
								rectangular: true,
							}))
						}
						activeLayout={activeLayout}
					>
						<RectangleCardLayout />
					</StyledRectangleButton>
				</>
			)}
		</StyledSwitchLayout>
	);
};

export default SwitchLayout;
