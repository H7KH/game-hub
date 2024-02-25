import { extendTheme, ThemeConfig } from "@chakra-ui/react";

const config: ThemeConfig = {
	initialColorMode: 'dark'
}

const theme = extendTheme({
	config,
	colors: {
		gray: {
			50: '#f2eff9',
			100: '#d4d3de',
			200: '#b8b6c6',
			300: '#9c99b0',
			400: '#7f7d99',
			500: '#66637f',
			600: '#4f4d63',
			700: '#393747',
			800: '#22212c',
			900: '#0b0b14'
		}
	}

})

export default theme
