import moraga from "typography-theme-moraga";
import { toTheme } from "@theme-ui/typography";
import { merge } from "lodash/fp";

import * as modes from "./modes";
import prism from "./prism";
import styles from "./styles";

moraga.headerWeight = 700;
const typography = toTheme(moraga);

export default merge(typography, {
	initialColorMode: "light",
	// Show errors above playground editor
	showLiveError: true,
	// Show preview of the code inside playground
	showLivePreview: true,
	// Show editor when a playground is rendered
	showPlaygroundEditor: true,
	// Show dark/light mode switch toggle in header
	showDarkModeSwitch: true,
	// Display edit this page button on every page
	showMarkdownEditButton: true,
	// Wrap the playground editor and preview in iframes to avoid style/script collisions
	useScopingInPlayground: false,
	colors: {
		...modes.light,
		modes: {
			dark: modes.dark,
		},
	},
	fonts: {
		body: "Montserrat, sans-serif",
		heading: "Montserrat, sans-serif",
		monospace: "Montserrat, sans-serif",
	},
	fontSizes: [12, 14, 16, 20, 24, 32, 48, 64],
	fontWeights: {
		body: 300,
		heading: 500,
		bold: 500,
	},
	lineHeights: {
		body: 1.7,
		heading: 1,
	},
	letterSpacings: {
		body: "normal",
		caps: "0.2em",
	},
	space: [0, 4, 8, 16, 32, 48, 64, 80, 100],
	radii: {
		square: 0,
		radius: 4,
		rounded: 10,
	},
	styles,
	prism,
});
