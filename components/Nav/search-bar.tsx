import React from 'react';

interface Props {
	className?: string;
}

const SearchBar: React.FC<Props> = ({ className }) => {
	return (
		<div className={className}>
			<Input />
		</div>
	);
};

export default SearchBar;
