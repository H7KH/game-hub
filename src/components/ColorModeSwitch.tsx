import { HStack, Icon, Switch, useColorMode } from '@chakra-ui/react';
import { BsMoon, BsSun } from 'react-icons/bs';

const ColorModeSwitch = () => {
	const { colorMode, toggleColorMode } = useColorMode();
	return (
		<HStack>
			<Icon as={BsSun} boxSize='18px' />
			<Switch
				colorScheme='green'
				isChecked={colorMode === 'dark'}
				onChange={toggleColorMode}
			/>
			<Icon as={BsMoon} boxSize='16px' />
		</HStack>
	);
};

export default ColorModeSwitch;
