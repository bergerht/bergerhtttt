import { Flex, Box } from "theme-ui";
import React from "react";
import heizung from "./heizung.svg";
import kaelte from "./kaelte.svg";
import klima from "./klima.svg";
import lueftung from "./lueftung.svg";
import sanitaer from "./trinkwasser.svg";
import "../Kontakt/style.css";

export const Leistungen = () => {
	return (
		<Flex style={{ margin: "3%" }}>
			<Box style={{ margin: "2%" }}>
				{" "}
				<img src={sanitaer} alt='Sanitär' className='imgx' />
				<div className='hovered'>Hallo</div>
			</Box>

			<Box style={{ margin: "2%" }}>
				<img src={lueftung} alt='Lüftung' className='imgx' />
			</Box>
			<Box style={{ margin: "2%" }}>
				<img src={heizung} alt='Heizung' className='imgx' />
			</Box>
			<Box style={{ margin: "2%" }}>
				<img src={kaelte} alt='Kälte' className='imgx' />
			</Box>
			<Box style={{ margin: "2%" }}>
				<img src={klima} alt='Sanitär' className='imgx' />
			</Box>
		</Flex>
	);
};
