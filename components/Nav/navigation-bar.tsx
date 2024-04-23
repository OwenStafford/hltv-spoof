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
import Link from 'next/link';

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
				'relative group flex flex-col w-full h-full items-center justify-center',
				className
			)}
		>
			<Link href={navItem.path} className='h-full w-full'>
				<div className='flex text-sm cursor-pointer h-full space-x-2 w-full items-center justify-center hover:text-hltv-primary hover:bg-gray-100'>
					<span>{navItem.label}</span>
					{navItem.subItems && navItem.subItems.length > 0 && (
						<Icon icon={IconType.CHEVRON_DOWN} size='xs' />
					)}
				</div>
			</Link>
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
	return (
		<div
			className={cn(
				'top-full w-48 bg-white shadow-lg rounded-b-sm border border-gray-200 z-10 flex flex-col',
				className
			)}
		>
			{navItems.map((navItem, index) => (
				<Link key={index} href={navItem.path}>
					<div
						className={cn(
							'text-black cursor-pointer p-3 hover:bg-gray-100 hover:text-hltv-primary text-sm',
							'border border-t-[0.5px] border-l-4',
							'border-white border-t-gray-200 hover:border-gray-100 hover:border-l-hltv-primary'
						)}
					>
						{navItem.label}
					</div>
				</Link>
			))}
		</div>
	);
};
