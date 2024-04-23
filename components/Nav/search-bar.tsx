import React from 'react';
import { Input } from '../ui/input';
import { cn } from '@/lib/utils';

interface Props {
	className?: string;
}

const SearchBar: React.FC<Props> = ({ className }) => {
	return (
		<div className={className}>
			<NavInput placeholder='Search...' />
		</div>
	);
};

export default SearchBar;

export interface InputProps
	extends React.InputHTMLAttributes<HTMLInputElement> {}

const NavInput = React.forwardRef<HTMLInputElement, InputProps>(
	({ className, type, ...props }, ref) => {
		return (
			<input
				type={type}
				className={cn(
					'flex w-full rounded-sm border border-input bg-gray-100 px-3 py-2 text-xs ring-offset-gray-100 placeholder:text-gray-400 focus-visible:outline-none focus-visible:ring-[1.5px] focus-visible:ring-hltv-primary focus-visible:ring-offset-1 placeholder:text-xs h-6 outline-none border-none font-light ',
					className
				)}
				ref={ref}
				{...props}
			/>
		);
	}
);
