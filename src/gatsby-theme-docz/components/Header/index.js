/** @jsx jsx */
import { jsx, Box, useColorMode } from "theme-ui";
import { useConfig, useCurrentDoc } from "docz";

import * as styles from "./styles";
import { Edit, Menu } from "../Icons";
import { Logo } from "../Logo";

export const Header = (props) => {
	const { onOpen } = props;
	const {
		repository,
		themeConfig: { showDarkModeSwitch, showMarkdownEditButton },
	} = useConfig();
	const { edit = true, ...doc } = useCurrentDoc();
	const [colorMode, setColorMode] = useColorMode();

	const toggleColorMode = () => {
		setColorMode(colorMode === "light" ? "dark" : "light");
	};

	return (
		<div sx={styles.wrapper} data-testid='header'>
			<Box sx={styles.menuIcon}>
				<button sx={styles.menuButton} onClick={onOpen}>
					<Menu size={30} />
				</button>
			</Box>
			<div sx={styles.innerContainer}>
				<Logo />
				{/* <Flex>
					{showDarkModeSwitch && (
						<button
							sx={styles.headerButton}
							onClick={toggleColorMode}
							aria-label={`Switch to ${colorMode} mode`}
						>
							<Sun size={15} />
						</button>
					)}
				</Flex> */}
				{showMarkdownEditButton && edit && doc.link && (
					<a
						sx={styles.editButton}
						href={doc.link}
						target='_blank'
						rel='noopener noreferrer'
					>
						<Edit width={14} />
						<Box sx={{ pl: 2 }}>Edit page</Box>
					</a>
				)}
			</div>
		</div>
	);
};
