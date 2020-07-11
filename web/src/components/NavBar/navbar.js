import React from "react";

import { Nav, Logo, Item } from "./main";
import Burger from "./burger";

const NavBar = () => {
	return (
		<Nav>
			<Item href="#">
				<Logo />
			</Item>
			<Burger />
		</Nav>
	);
};

export default NavBar;
