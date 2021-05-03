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
			<iframe
				src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2496.871787534325!2d12.885181216134965!3d51.258269979595106!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47a7090d727bbe6b%3A0xc22fcc9f1b69325d!2sBerger%20Haustechnik%20GmbH!5e0!3m2!1sde!2sde!4v1618328007369!5m2!1sde!2sde'
				width='100%'
				height='300'
				style={{ borderTop: "0", marginBottom: "0" }}
				allowfullscreen=''
				loading='lazy'
				aria-hidden='false'
				title='GoogleMaps'
			></iframe>
		</div>
	);
};
