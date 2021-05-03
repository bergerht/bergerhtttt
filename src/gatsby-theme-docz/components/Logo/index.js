/** @jsx jsx */
import { jsx, Flex } from "theme-ui";
import { Link } from "docz";
import logo from "./logo.svg";

export const Logo = () => (
	<Flex alignItems='center' data-testid='logo'>
		<Link to='/'>
			<img
				src={logo}
				alt='Berger Haustechnik Logo'
				style={{ height: "70px", width: "auto", padding: "2%" }}
			/>
		</Link>
	</Flex>
);
