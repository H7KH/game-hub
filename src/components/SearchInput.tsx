import { Input, InputGroup, InputLeftElement } from '@chakra-ui/react';
import React from 'react';
import { BsSearch } from 'react-icons/bs';

const SearchInput = () => {
	return (
		<InputGroup>
			<InputLeftElement pointerEvents='none'>
				<BsSearch />
			</InputLeftElement>
			<Input borderRadius={20} placeholder='Search games...' variant='filled' />
		</InputGroup>
	);
};

export default SearchInput;
