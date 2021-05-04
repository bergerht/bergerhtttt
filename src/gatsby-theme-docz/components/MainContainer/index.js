/** @jsx jsx */
import { jsx, Container } from "theme-ui";

import * as styles from "./styles";

export const MainContainer = ({ children, ...rest }) => {
	return (
		<Container
			sx={styles.container}
			{...rest}
			style={{ paddingTop: "50px", paddingLeft: "50px" }}
		>
			{children}
		</Container>
	);
};
