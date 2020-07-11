import React from "react";

import { Items, Item, Button } from "./main";

const SideBar = ({ open, setOpen }) => {
	function autoHide() {
		setOpen(false);
	}

	return (
		<Items open={open}>
			<li>
				<Item href="#home" onClick={autoHide}>
					Home
				</Item>
			</li>
			<li>
				<Item href="#ods" onClick={autoHide}>
					O que são ODS?
				</Item>
			</li>
			<li>
				<Item href="#sobre" onClick={autoHide}>
					Sobre
				</Item>
			</li>
			<li>
				<Item href="#vantagens" onClick={autoHide}>
					Vantagens
				</Item>
			</li>
			<li>
				<Button href="#analise" onClick={autoHide}>
					Faça sua análise
				</Button>
			</li>
		</Items>
	);
};

export default SideBar;
