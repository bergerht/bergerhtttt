import { Flex, Box } from "theme-ui";
import React from "react";
import heizung from "./heizung.svg";
import kaelte from "./kaelte.svg";
import klima from "./klima.svg";
import lueftung from "./lueftung.svg";
import sanitaer from "./trinkwasser.svg";
import sani from "./bathroom.jpg";
import "../Kontakt/style.css";

export const Leistungen = () => {
	return (
		<Flex style={{ margin: "3% 3% 5% 3%", paddingBottom: "10%" }}>
			<Box style={{ margin: "2%" }}>
				{" "}
				<img src={sanitaer} alt='Sanitär' className='imgx' />
				<div className='hovered ll'>
					<h2 className='centered'>Sanitär</h2>
					<ul style={{ color: "black" }}>
						<li>
							Neubau und Sanierung von sanitären Anlagen in Wohnhäusern,
							Industrie- und Gewerbebauten
						</li>
						<li>
							Spezialisierung auf Krankenhäuser, Altenpflegeeinrichtungen und
							behindertengerechte Wohnheime/Werkstätten.
						</li>
						<li>
							Planung und Installation komplexer Wasseraufbereitungsanlagen und
							Abwasseranlagen (auch belastete Abwässer)
						</li>
						<li>Regenwasser-Nutzungsanlagen</li>
						<li>Fettabscheideranlagen (für Großküchen)</li>
					</ul>
				</div>
			</Box>

			<Box style={{ margin: "2%" }}>
				<img src={lueftung} alt='Lüftung' className='imgx' />
				<div className='hovered ll'>
					<h2 className='centered'>Lüftung</h2>
					<ul style={{ color: "black" }}>
						<li>Einzelraumlüftungen</li>

						<li>komplexe Lüftungsanlagen</li>
						<li>Lüftungsanlagen mit WRG</li>
						<li>Laborabluftanlagen</li>
						<li>Spanabsaugungsanlagen für Tischlereien</li>
						<li>
							Einmessung von Lüftungsanlagen (Volumenströmung,
							Luftgeschwindigkeit, Schall, Temperatur)
						</li>
						<li>Realisierung aller Regelkonzeptionen</li>
						<li>
							Beratung und Realisierung von Lüftungsfiterung, Entfeuchtung und
							Befeuchtung
						</li>
						<li>Küchenabsaugungen </li>
						<li>Abgasabsaugungsanlagen</li>
					</ul>
				</div>
			</Box>
			<Box style={{ margin: "2%" }}>
				<img src={heizung} alt='Heizung' className='imgx' />
				<div className='hovered ll'>
					<h2 className='centered'>Heizung</h2>
					<ul style={{ color: "black" }}>
						<li>
							Austausch veralteter Kesselanlagen (gesetzliche Förderung seit
							2000)
						</li>

						<li>Einbau von Heizungsanlagen in EFH (Einbauzeit nur 1 Woche!)</li>
						<li>Lüftungsanlagen mit WRG</li>
						<li>
							Heizungsanlagen in Wohn- und Geschäftshäuser, Inustriebauten
						</li>
						<li>
							für alle Anwendungen auf Basis von Öl, Dampf, Fernwärme, Solar,
							Wärmepumpen ...
						</li>
					</ul>
				</div>
			</Box>
			<Box style={{ margin: "2%" }}>
				<img src={kaelte} alt='Kälte' className='imgx' />
				<div className='hovered ll'>
					<h2 className='centered'>Kälte</h2>
					<ul style={{ color: "black" }}>
						<li>Implementierung von Kühlern in Lüftungsanlagen</li>
						<li>Kühlung von Rechnerräumen</li>
						<li>Kühlung von Büroräumen</li>
						<li>Kühldecken</li>
						<li>Kühltürme </li>
						<li>Kühlanlagen für die Lebensmittelindustrie</li>
					</ul>
				</div>
			</Box>
			<Box style={{ margin: "2%" }}>
				<img src={klima} alt='Klima' className='imgx' />
				<div className='hovered ll'>
					<h2 className='centered'>Klima</h2>
					<ul style={{ color: "black" }}>
						<li>Implementierung von Kühlern in Lüftungsanlagen</li>
						<li>Kühlung von Rechnerräumen</li>
						<li>Kühlung von Büroräumen</li>
						<li>Kühldecken</li>
						<li>Kühltürme </li>
						<li>Kühlanlagen für die Lebensmittelindustrie</li>
					</ul>
				</div>
			</Box>
		</Flex>
	);
};
