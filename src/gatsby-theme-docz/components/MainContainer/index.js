/** @jsx jsx */
import { jsx, Container } from "theme-ui";

import * as styles from "./styles";

export const MainContainer = ({ children, handleToggleSidebar, ...rest }) => {
	return (
		<Container sx={styles.container} {...rest} style={{ padding: "50px" }}>
			<div className='btn-toggle' onClick={() => handleToggleSidebar(true)} role="button" tabIndex={0}>
				
			</div>
			{children}
		</Container>
	);
};
