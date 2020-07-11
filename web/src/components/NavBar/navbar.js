import React from "react";

import { Nav, Logo } from "./main";
import Burger from "./burger";

const NavBar = () => {
	return (
		<Nav>
			<a href="/">
				<Logo />
			</a>
			<Burger />
		</Nav>
	);
};

export default NavBar;
