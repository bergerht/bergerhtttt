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
			<h1>Kontakt</h1>
			<p>
				Wenn Sie im Raum Sachsen auf der Suche nach kompetenter Unterstützung im
				Bereich der Haustechnik sind, bei denen keine sofortige Hilfe durch
				einen Notdienst von Nöten ist, empfehlen wir Ihnen die Nutzung unseres
				Kontaktformulars. Hier können Sie uns auf unkomplizierte Art und Weise
				Ihre Kontaktdaten und weitere Informationen zu Ihrer Anfrage mitteilen.
				Insbesondere wenn es sich um einen Terminwunsch für Arbeiten, ein
				Beratungsgespräch zu Planungen und Wünschen im Sanitär-, Heizung-,
				Kältetechnik- &amp; Lüftungsbereich im Raum Leipzig oder einfach nur
				eine Frage handelt: Wir werden Ihre Anfrage schnellstmöglich bearbeiten
				und uns dann umgehend bei Ihnen melden. Selbstverständlich werden all
				Ihre Daten vertraulich behandelt.
			</p>

			{/* <hr
        style={{
            border: "#cd0000 solid 1px",
            width: "70%",
            margin: "auto",
        }}
    />
    <hr
        style={{
            border: "#c9d75a solid 0.5px",
            width: "70%",
            margin: "auto",
            marginTop: "2px",
        }}
    /> */}

			{/* Strichmännchen insgesamt  */}
			<Flex>
				<Box>
					<div>
						<a href='tel:+493438551287'>
							<img src={telefon} className='img' alt='Telefonnummer' />
						</a>
						<div>
							<p>
								<strong>Telefon:</strong>034385-51287
							</p>
						</div>
					</div>

					<div className='hovered'>
						<p>
							<strong>Handynummer:</strong> ???
						</p>
					</div>
					<a href='tel:+493438551504'>
						<img src={handy} alt='Handynummer' className='img' />
					</a>

					<div class='hovered'>
						<p>
							<strong>Postadresse:</strong> <br />
							Berger Haustechnik GmbH
							<br />
							Böhlitzer Weg 2
							<br /> 04668 Grimma
						</p>
					</div>
					<img src={post} alt='Postadresse' className='img' />
				</Box>

				<Box>
					{" "}
					<img src={strich} alt='Strichmännchen' width='100%' height='auto' />
				</Box>

				<Box>
					{/* 3. Spalte */}
					<div class='hovered'>
						<p>
							<strong>Mailadresse:</strong> <br />
							bht@bergerht.de
						</p>
					</div>

					<a href='mailto:bht@bergerht.de'>
						<img src={mail} alt='Mailadresse' className='img' />
					</a>

					<div class='hovered'>
						<p>
							<strong>Fax:</strong> <br /> 034385-51484
						</p>
					</div>

					<a href='fax:+493438551484'>
						<img src={fax} alt='Faxadresse' className='img' />
					</a>

					<div class='hovered'>
						<p>
							<strong>Adresse:</strong> <br />
							Berger Haustechnik GmbH
							<br />
							Böhlitzer Weg 2
							<br /> 04668 Grimma
						</p>
					</div>

					<img src={adresse} alt='Adresse' className='img' />
				</Box>
			</Flex>

			<iframe
				src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2496.871787534325!2d12.885181216134965!3d51.258269979595106!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47a7090d727bbe6b%3A0xc22fcc9f1b69325d!2sBerger%20Haustechnik%20GmbH!5e0!3m2!1sde!2sde!4v1618328007369!5m2!1sde!2sde'
				width='100%'
				height='400'
				style={{ borderTop: "0", marginBottom: "0" }}
				allowfullscreen=''
				loading='lazy'
				aria-hidden='false'
				title='GoogleMaps'
			></iframe>
		</div>
	);
};
