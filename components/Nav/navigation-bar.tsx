import React from 'react';
import { cn } from '@/lib/utils';
import {
	NavigationItem as _NavigationItem,
	NavigationItems as _NavigationItems,
} from '@/models/navigation';
import SearchBar from './search-bar';

interface Props {
	className?: string;
}

const NavigationBar: React.FC<Props> = ({ className }) => {
	return (
		<div
			className={cn(
				'flex h-10 shadow-lg w-full items-center justify-center px-3 fixed bg-white',
				className
			)}
		>
			<div className='items-start flex w-3/5 h-full'>
				{_NavigationItems.map((navItem, index) => (
					<NavigationItem key={index} navItem={navItem} />
				))}
			</div>
			<SearchBar />
		</div>
	);
};

export default NavigationBar;

interface NavigationItemProps {
	className?: string;
	navItem: _NavigationItem;
}

const NavigationItem: React.FC<NavigationItemProps> = ({
	className,
	navItem,
}) => {
	return (
		<div
			className={cn(
				'flex justify-center w-full text-sm hover:bg-slate-100 h-full items-center cursor-pointer hover:text-hltv-primary',
				className
			)}
		>
			<a href={navItem.path}>{navItem.label}</a>
		</div>
	);
};
