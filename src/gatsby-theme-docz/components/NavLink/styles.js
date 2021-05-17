export const link = {
	my: 2,
	display: "block",
	color: "sidebar.navGroup",
	textDecoration: "none",
	fontSize: 1,
	"&.active": {
		color: "sidebar.navLinkActive",
	},
	"&::first-letter": {
		visibility: "hidden",
		display: "none",
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
