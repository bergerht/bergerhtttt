/** @jsx jsx */
import { useRef, useState } from "react";
import { jsx, Layout as BaseLayout, Main } from "theme-ui";
import { Global } from "@emotion/react";

import global from "~theme/global";
import { Header } from "../Header";
import { Sidebar } from "../Sidebar";
import { MainContainer } from "../MainContainer";
import * as styles from "./styles";
import CookieConsent from "react-cookie-consent";

export const Layout = ({ children }) => {
	const [open, setOpen] = useState(false);
	const nav = useRef();

	return (
		<BaseLayout sx={{ "& > div": { flex: "1 1 auto" } }} data-testid='layout'>
			<Global styles={global} />
			<Main sx={styles.main}>
				<Header onOpen={() => setOpen((s) => !s)} />
				<div sx={styles.wrapper}>
					<Sidebar
						ref={nav}
						open={open}
						onFocus={() => setOpen(true)}
						onBlur={() => setOpen(false)}
						onClick={() => setOpen(false)}
					/>
					<MainContainer data-testid='main-container'>{children}</MainContainer>
				</div>
				<CookieConsent
					enableDeclineButton
					flipButtons
					location='bottom'
					style={{
						background: "white",
						borderTop: "2px solid #c9d75a",
						alignItems: "center",
						fontSize: "10px",
						justifyContent: "center",
						fontFamily: "'Montserrat', sans-serif",

						color: "black",
					}}
					buttonText='Zustimmen'
					buttonStyle={{
						backgroundColor: "#c9d75a",
						color: "black",
						boxShadow: "0 0 5px #cccccc",

						fontSize: "13px",
						fontWeight: "500",
						fontFamily: "'Montserrat', sans-serif",
						padding: "10px",
					}}
					declineButtonText='Ablehnen'
					declineButtonStyle={{
						background: "white",
						border: "solid #c9d75a 1px",
						color: "#c9d75a",
						fontSize: "13px",
						padding: "10px",

						fontFamily: "'Montserrat', sans-serif",
					}}
				>
					Diese Website speichert Cookies auf Ihrem Computer. Wir verwenden
					diese Informationen, um Ihr Surf-Erlebnis zu verbessern und anzupassen
					und für Analysen und Metriken über unsere Besucher auf dieser Website.
					Wenn Sie dies ablehnen, werden Ihre Informationen nicht verfolgt, wenn
					Sie diese Website besuchen. Ein einziger Cookie wird in Ihrem Browser
					verwendet, um Ihre Präferenz, nicht verfolgt zu werden, zu speichern.
				</CookieConsent>
			</Main>
		</BaseLayout>
	);
};
