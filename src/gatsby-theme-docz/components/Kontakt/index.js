import adresse from "./adresse.svg";
import fax from "./fax.svg";
import handy from "./handy.svg";
import mail from "./mail.svg";
import post from "./post.svg";
import telefon from "./telefon.svg";
import strich from "./strich_kontakt.svg";
import { Flex, Box } from "theme-ui";
import React from "react";
import "./style.css";

export const Kontakt = () => {
	return (
		<div>
			<Flex
				sx={{
					alignItems: "center",
					justifyContent: "center",
					padding: "5% 3%",
				}}
			>
				<Box
					style={{
						margin: "0% 2%",
					}}
				>
					<Flex>
						<a href='tel:+493438551287' className='x'>
							<img src={telefon} alt='Telefonnummer' className='imgy' />
						</a>
						<div className='hovered l'>
							<strong>Telefon:</strong> <br />
							034385-51287
						</div>
					</Flex>

					<Flex>
						<a href='tel:+493438551504' className='x'>
							<img src={handy} alt='Handynummer' className='imgy' />
						</a>
						<div className='hovered l'>
							<strong>Handynummer:</strong> <br /> ???
						</div>
					</Flex>

					<Flex>
						<img src={post} alt='Postadresse' className='imgy' />
						<div class='hovered l '>
							<strong>Postadresse:</strong> <br />
							Berger Haustechnik GmbH
							<br />
							Mutzschen
							<br />
							Böhlitzer Weg 2
							<br /> 04668 Grimma
						</div>
					</Flex>
				</Box>

				<Box
					style={{
						margin: "0% 2%",
					}}
				>
					<div className='imgx'>
						<img src={strich} alt='Strichmännchen' />
					</div>
				</Box>

				<Box
					style={{
						margin: "0% 2%",
					}}
				>
					{/* 3. Spalte */}
					<Flex>
						<a href='mailto:bht@bergerht.de' className='x'>
							<img src={mail} alt='Mailadresse' className='imgy' />
						</a>
						<div class='hovered r'>
							<strong>Mailadresse:</strong> <br />
							bht@bergerht.de
						</div>
					</Flex>

					<Flex>
						<a href='fax:+493438551484' className='x'>
							<img src={fax} alt='Faxadresse' className='imgy' />
						</a>
						<div class='hovered r'>
							<strong>Fax:</strong> <br /> 034385-51484
						</div>
					</Flex>

					<Flex
						sx={{
							alignItems: "center",
							justifyContent: "center",
						}}
					>
						<img src={adresse} alt='Adresse' className='imgy' />
						<div class='hovered r'>
							<strong>Adresse:</strong> <br />
							Berger Haustechnik GmbH
							<br />
							Mutzschen
							<br />
							Böhlitzer Weg 2
							<br /> 04668 Grimma
						</div>
					</Flex>
				</Box>
			</Flex>

			<br />
		</div>
	);
};
