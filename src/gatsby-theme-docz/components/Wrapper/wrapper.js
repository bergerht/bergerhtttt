import * as React from "react";
import { Helmet } from "react-helmet-async";

// The doc prop contains some metadata about the page being rendered that you can use.
const Wrapper = ({ children, doc }) => (
	<React.Fragment>
		<Helmet>
			<meta charSet='utf-8' />
			<meta
				name='keywords'
				content='Haustechnik, Sanitär, Klempner, Sachsen, Heizung, Lüftung'
			/>
			<title>Berger Haustechnik GmbH</title>
			<description>Berger Haustechnik ist seit über 100 Jahren ihr vertrauensvoller und zuverlässiger Partner in der Region. Wir stehen Ihnen mit großem Erfahrungsschatz, etlichen zufriedenen Kunden und stets höchster Qualität zur Seite.</description>

			<link
				rel='icon'
				type='image/png'
				href='../../../../docs/images/uploads/icon_rgb.png'
			/>
		</Helmet>
		{children}
	</React.Fragment>
);
export default Wrapper;
