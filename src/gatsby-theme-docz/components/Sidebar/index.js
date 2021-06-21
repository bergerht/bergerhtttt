/** @jsx jsx */
import { jsx } from "theme-ui";
import {
	ProSidebar,
	Menu,
	SidebarContent,
	MenuItem,
	SubMenu,
} from "react-pro-sidebar";
import { Link } from "gatsby";
import "./custom.scss";

export const Sidebar = ({ toggled, handleToggleSidebar }) => {
	return (
		<ProSidebar
			toggled={toggled}
			onToggle={handleToggleSidebar}
			breakpoint='md'
			style={{ borderRight: "1px solid #caff70" }}
		>
			<SidebarContent>
				<Menu iconShape='square'>
					{/* <MenuItem>Dashboard</MenuItem> */}
					<SubMenu title='Zusammenarbeit'>
						<MenuItem>
							<Link to='/zusammenarbeit/kontakt/'>
								Sie brauchen uns - Kontaktmöglichkeiten
							</Link>
						</MenuItem>
						<MenuItem>
							<Link to='/zusammenarbeit/stellenausschreibungen/'>
								wir brauchen Sie - Stellenausschreibungen
							</Link>
						</MenuItem>
					</SubMenu>
					<SubMenu title='Leistungen'>
						<MenuItem>
							<Link to='/leistungen/installation/'>Installation</Link>
						</MenuItem>
						<MenuItem>
							<Link to='/leistungen/service/'>Service</Link>
						</MenuItem>
						<MenuItem>
							<Link to='/leistungen/Wartung/'>Wartung</Link>
						</MenuItem>
						<MenuItem>
							<Link to='/leistungen/Vermietung/'>Vermietung</Link>
						</MenuItem>
					</SubMenu>

					<SubMenu title='Informationen'>
						<MenuItem>
							<Link to='/informationen/bergerhaustechnik/'>
								wir über uns - gegründet 1855, Familientradition seit 1899.
							</Link>
						</MenuItem>
						<MenuItem>
							<Link to='/informationen/projekte/'>
								worauf wir stolz sind - Referenzen.
							</Link>
						</MenuItem>
						<MenuItem>
							<Link to='/informationen/impressum/'>Impressum</Link>
						</MenuItem>
						<MenuItem>
							<Link to='/informationen/datenschutz/'>Datenschutz</Link>
						</MenuItem>
					</SubMenu>
				</Menu>
			</SidebarContent>
		</ProSidebar>
	);
};

// /** @jsx jsx */
// import { Fragment, forwardRef, useState, useRef, useEffect } from "react";
// import { Global } from "@emotion/react";
// import { jsx, Box } from "theme-ui";
// import { useMenus, useCurrentDoc } from "docz";

// import * as styles from "./styles";
// import { NavSearch } from "../NavSearch";
// import { NavLink } from "../NavLink";
// import { NavGroup } from "../NavGroup";

// export const Sidebar = forwardRef(function Sidebar(props, ref) {
// 	const [query, setQuery] = useState("");
// 	const menus = useMenus({ query });
// 	const currentDoc = useCurrentDoc();
// 	const currentDocRef = useRef();
// 	const handleChange = (ev) => {
// 		setQuery(ev.target.value);
// 	};
// 	useEffect(() => {
// 		if (ref.current && currentDocRef.current) {
// 			ref.current.scrollTo(0, currentDocRef.current.offsetTop);
// 		}
// 	}, []);
// 	return (
// 		<Fragment>
// 			<Box onClick={props.onClick} sx={styles.overlay(props)}>
// 				{props.open && <Global styles={styles.global} />}
// 			</Box>
// 			<Box ref={ref} sx={styles.wrapper(props)} data-testid='sidebar'>
// 				<NavSearch
// 					placeholder='Suche...'
// 					value={query}
// 					onChange={handleChange}
// 				/>
// 				{menus &&
// 					menus.map((menu) => {
// 						if (!menu.route)
// 							return <NavGroup key={menu.id} item={menu} sidebarRef={ref} />;
// 						if (menu.route === currentDoc.route) {
// 							return (
// 								<NavLink key={menu.id} item={menu} ref={currentDocRef}>
// 									{menu.name}
// 								</NavLink>
// 							);
// 						}
// 						return (
// 							<NavLink key={menu.id} item={menu}>
// 								{menu.name}
// 							</NavLink>
// 						);
// 					})}
// 			</Box>
// 		</Fragment>
// 	);
// });
