import React from "react";
import { Link } from "gatsby";

export const Button = ({ children }) => {
	return (
		<button
			style={{
				backgroundColor: "#cd0000",
				padding: "5px",
				cursor: "pointer",
				border: "2px outset #f2f2f2",
			}}
		>
			<Link
				to='/informationen/projekte/'
				style={{
					fontFamily: "Montserrat",
					color: "white",
					textDecoration: "none",
				}}
			>
				zurück
			</Link>
		</button>
	);
};
