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
					padding: "3% 0",
				}}
			>
				
				<Box>
					<div className='img'>
						<a href='tel:+493438551287'>
							<img src={telefon} alt='Telefonnummer' className='imgx' />
						</a>
						<div>
							<p className='hovered'>
								<strong>Telefon:</strong>034385-51287
							</p>
						</div>
					</div>

					<div className='img'>
						<a href='tel:+493438551504'>
							<img src={handy} alt='Handynummer' />
						</a>
						<div className='hovered'>
							<p>
								<strong>Handynummer:</strong> ???
							</p>
						</div>
					</div>

					<div className='img'>
						<div class='hovered'>
							<p>
								<strong>Postadresse:</strong> <br />
								Berger Haustechnik GmbH
								<br />
								Böhlitzer Weg 2
								<br /> 04668 Grimma
							</p>
						</div>
						<img src={post} alt='Postadresse' />
					</div>
				</Box>

				<Box sx={{ margin: "1%" }}>
					<div className='imgx'>
						<img src={strich} alt='Strichmännchen' />
					</div>
					{/* <img
						src={strich}
						alt='Strichmännchen'
						style-={{ width: "100%", height: "auto" }}
					/> */}
				</Box>

				<Box>
					{/* 3. Spalte */}
					<div className='img'>
						<div class='hovered'>
							<p>
								<strong>Mailadresse:</strong> <br />
								bht@bergerht.de
							</p>
						</div>

						<a href='mailto:bht@bergerht.de'>
							<img src={mail} alt='Mailadresse' />
						</a>
					</div>

					<div className='img'>
						<div class='hovered'>
							<p>
								<strong>Fax:</strong> <br /> 034385-51484
							</p>
						</div>

						<a href='fax:+493438551484'>
							<img src={fax} alt='Faxadresse' />
						</a>
					</div>

					<div className='img'>
						<div class='hovered'>
							<p>
								<strong>Adresse:</strong> <br />
								Berger Haustechnik GmbH
								<br />
								Böhlitzer Weg 2
								<br /> 04668 Grimma
							</p>
						</div>

						<img src={adresse} alt='Adresse' />
					</div>
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
