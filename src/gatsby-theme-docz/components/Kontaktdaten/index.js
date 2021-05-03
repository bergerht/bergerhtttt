import React from "react";
import "./style.css";

export const Kontaktdaten = () => {
	return (
		<div>
			{/* <ul className='flex-container wrap'>
				
				<li className='flex-item'>
					<strong>Telefon:</strong> <br />
					034385-51287
				</li>
				<li className='flex-item'>
					<strong>Handynummer:</strong> <br /> ???
				</li>
				<li className='flex-item'>
					<strong>Postadresse:</strong> <br />
					Berger Haustechnik GmbH
					<br />
					Mutzschen
					<br />
					Böhlitzer Weg 2
					<br /> 04668 Grimma
				</li>
				<li className='flex-item'>
					<strong>Mailadresse:</strong> <br />
					bht@bergerht.de
				</li>
				<li className='flex-item'>
					<strong>Fax:</strong> <br /> 034385-51484
				</li>
				<li className='flex-item'>
					<strong>Adresse:</strong> <br />
					Berger Haustechnik GmbH
					<br />
					Mutzschen
					<br />
					Böhlitzer Weg 2
					<br /> 04668 Grimma
				</li>
			</ul> */}
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
