import { media } from "~theme/breakpoints";

export const container = {
	backgroundColor: "background",
	position: "relative",
	maxWidth: 960,
	py: 7,
	px: 4,
	variant: "styles.Container",
	[media.tablet]: {
		py: 7,
		px: 4,
		pt: 5,
	},
};
