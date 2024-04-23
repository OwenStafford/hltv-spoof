import React from 'react';
import { cn } from '@/lib/utils';
import {
	NavigationItem as _NavigationItem,
	NavigationItems as _NavigationItems,
} from '@/models/navigation';
import SearchBar from './search-bar';
import SignIn from './sign-in';
import { IconType } from '@/models/Icon';
import Icon from '../icon/icon';

interface Props {
	className?: string;
}

const NavigationBar: React.FC<Props> = ({ className }) => {
	return (
		<div
			className={cn(
				'flex h-10 shadow-lg w-full items-center justify-center px-3 fixed bg-white space-x-4',
				className
			)}
		>
			<div className='items-start flex w-3/5 h-full'>
				{_NavigationItems.map((navItem, index) => (
					<NavigationItem key={index} navItem={navItem} />
				))}
			</div>
			<SearchBar />
			<SignIn />
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
				'relative group flex flex-col justify-center w-full text-sm h-full items-center cursor-pointer hover:text-hltv-primary',
				className
			)}
		>
			<a
				href={navItem.path}
				className='text-center flex items-center space-x-2'
			>
				<span>{navItem.label}</span>
				{navItem.subItems && navItem.subItems.length > 0 && (
					<Icon icon={IconType.CHEVRON_DOWN} size='xs' />
				)}
			</a>
			{navItem.subItems && navItem.subItems.length > 0 && (
				<NavigationDropdown
					className='hidden group-hover:block absolute left-0'
					navItems={navItem.subItems}
				/>
			)}
		</div>
	);
};

interface NavigationDropdownProps {
	className?: string;
	navItems: _NavigationItem[];
}

const NavigationDropdown: React.FC<NavigationDropdownProps> = ({
	className,
	navItems,
}) => {
	// Adjust the 'top-full' class or replace it with a specific value to position the dropdown
	return (
		<div
			className={cn(
				'top-full w-48 bg-white shadow-lg rounded-b-sm border border-gray-200 z-10', // mt-1 for a small gap
				className
			)}
		>
			{navItems.map((navItem, index) => (
				<p
					className={cn(
						'text-black p-3 hover:cursor-pointer border border-t-[0.5px] border-t-gray-200 border-l-4 hover:border-l-hltv-primary border-l-white border-b-white border-r-white  hover:border-b-gray-100 hover:border-r-gray-100 hover:bg-gray-100 hover:text-hltv-primary'
					)}
				>
					{navItem.label}
				</p>
			))}
		</div>
	);
};
