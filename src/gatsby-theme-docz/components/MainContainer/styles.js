import { media } from "~theme/breakpoints";

export const container = {
	backgroundColor: "background",
	position: "relative",
	maxWidth: 960,
	py: 0,
	px: 0,

	variant: "styles.Container",
	[media.tablet]: {
		py: 4,
		px: 4,
		// pt: 5,
		paddingTop: '20px',
	},
};
