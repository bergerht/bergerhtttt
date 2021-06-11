import { media } from "~theme/breakpoints";

export const global = {
	body: {
		overflow: "hidden",
	},
};

const HEADER_HEIGHT = 81;

export const overlay = ({ open }) => ({
	zIndex: 999,
	position: "fixed",
	top: HEADER_HEIGHT,
	right: 0,
	bottom: 0,
	left: 0,
	background: "rgba(0,0,0,0.6)",
	transition: "all .2s ease-out",
	visibility: open ? "visible" : "hidden",
	opacity: open ? 1 : 0,
});

export const wrapper = ({ open }) => ({
	py: 4,
	px: 4,
	flexDirection: "column",
	position: "sticky",
	top: 0,
	zIndex: 1,
	minWidth: 0,
	maxHeight: "100vh",
	borderRight: (t) => `2px solid ${t.colors.border}`,
	overflow: "auto",
	WebkitOverflowScrolling: "touch",
	bg: "white",

	[media.tablet]: {
		zIndex: 9999,
		display: "block",
		position: "fixed",
		top: HEADER_HEIGHT,
		left: 0,
		bottom: 0,
		width: 256,
		px: 4,
		bg: "background",
		transition: "transform .2s ease-out",
		transform: open ? "translateX(0)" : "translateX(-100%)",
	},
});

export const link = {
	my: 2,
	display: "block",
	color: "sidebar.navGroup",
	textDecoration: "none",
	fontSize: 1,
	"&.active": {
		color: "sidebar.navLinkActive",
	},
};

export const smallLink = {
	...link,
	ml: 3,
	fontSize: 0.9,
	position: "relative",
	color: "sidebar.tocLink",
	"&.active": {
		color: "sidebar.tocLinkActive",
	},
	"&.active::before": {
		content: '""',
		position: "absolute",
		display: "block",
		top: "2px",
		left: -2,
		height: "1rem",
		backgroundColor: "primary",
		transition: "width 200ms ease 0s",
		width: "2px",
		borderRadius: 1,
	},
};

// export const wrapper = {
// 	my: 3,
// };

export const sublinkWrapper = {
	ml: 2,
};

export const title = {
	mb: 1,
	fontSize: 2,
	fontWeight: 500,
	color: "sidebar.navGroup",
	cursor: "pointer",
	display: "flex",
	justifyContent: "space-between",
	alignItems: "center",
};

export const chevron = ({ active }) => ({
	ml: 1,
	flexShrink: 0,
	alignSelf: "baseline",
	transform: `rotateX(${active ? 180 : 0}deg)`,
	transformOrigin: "center",
	transition: "transform .3s ease-in-out",
	color: "sidebar.navLinkActive",
});
