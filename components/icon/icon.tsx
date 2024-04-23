import React from 'react';
import { IconType, Icons } from '@/models/Icon';
import { SizeProp, config } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '@fortawesome/fontawesome-svg-core/styles.css';

config.autoAddCss = false;

interface Props {
	icon: IconType;
	className?: string;
	size?: SizeProp;
	fixedWidth?: boolean;
	tooltip?: string;
	tooltipSide?: 'top' | 'bottom' | 'left' | 'right';
	onClick?: (e: React.MouseEvent<SVGSVGElement, MouseEvent>) => void;
	onMouseEnter?: () => void;
	onMouseLeave?: () => void;
}

const Icon: React.FC<Props> = ({
	icon,
	size,
	className,
	fixedWidth = false,
	tooltip = '',
	onClick,
	onMouseEnter,
	onMouseLeave,
	tooltipSide = 'top',
}) => {
	return (
		<FontAwesomeIcon
			icon={Icons[icon]}
			size={size}
			className={className}
			fixedWidth={fixedWidth}
			onClick={onClick}
			onMouseEnter={onMouseEnter}
			onMouseLeave={onMouseLeave}
		/>
	);
};

export default Icon;
