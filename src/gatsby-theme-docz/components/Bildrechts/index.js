import React from "react";

export const Bildrechts = ({ foto }) => {
	return (
		<img
			src={foto}
			alt='Symbol'
			style={{ width: "50%", height: "auto", float: "right" }}
		/>
	);
};
