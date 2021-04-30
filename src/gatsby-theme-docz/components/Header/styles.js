import * as mixins from "~utils/mixins";
import { media } from "~theme/breakpoints";
import { auto } from "@popperjs/core";

export const wrapper = {
	bg: "header.bg",
	position: "relative",

	zIndex: 1,
	borderBottom: (t) => `1px solid ${t.colors.border}`,
};

export const innerContainer = {
	...mixins.centerAlign,
	px: 2,
	position: "relative",
	justifyContent: "center",
	height: 80,
};

export const menuIcon = {
	display: "none",
	position: "absolute",
	top: "calc(100% + 10px)",
	left: 30,

	[media.tablet]: {
		display: "block",
	},
};

export const menuButton = {
	...mixins.ghostButton,
	color: "header.text",
	opacity: 0.5,
	cursor: "pointer",
};

export const headerButton = {
	...mixins.centerAlign,
	outline: "none",
	p: "12px",
	border: "none",
	borderRadius: 9999,
	bg: "header.button.bg",
	color: "header.button.color",
	fontSize: 0,
	fontWeight: 600,
	cursor: "pointer",
};

export const editButton = {
	...mixins.centerAlign,
	position: "absolute",
	bottom: -40,
	right: 30,
	bg: "transparent",
	color: "muted",
	fontSize: 1,
	textDecoration: "none",
	borderRadius: "radius",
};
