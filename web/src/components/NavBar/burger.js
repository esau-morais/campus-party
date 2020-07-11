import React, { useState } from "react";
import styled from "styled-components";
import SideBar from "./sidebar";

/* Styled Burger */
const Toggler = styled.div`
	width: 2rem;
	height: 2rem;
	position: relative;
	right: 20px;
	z-index: 20;
	display: none;

	@media (max-width: 980px) {
		display: flex;
		justify-content: space-around;
		flex-flow: column nowrap;
	}

	span {
		width: 2rem;
		height: 0.25rem;
		background-color: #fff;
		border-radius: 10px;
		transform-origin: 1px;
		transition: all 0.3s linear;
		cursor: pointer;

		&:nth-child(1) {
			transform: ${({ open }) => (open ? "rotate(45deg)" : "rotate(0)")};
		}

		&:nth-child(2) {
			transform: ${({ open }) => (open ? "translateX(100%)" : "translateX(0)")};
			opacity: ${({ open }) => (open ? 0 : 1)};
		}

		&:nth-child(3) {
			transform: ${({ open }) => (open ? "rotate(-45deg)" : "rotate(0)")};
		}
	}
`;

const Burger = () => {
	const [open, setOpen] = useState(false);

	return (
		<>
			<Toggler open={open} onClick={() => setOpen(!open)}>
				<span />
				<span />
				<span />
			</Toggler>
			<SideBar open={open} setOpen={setOpen} />
		</>
	);
};

export default Burger;
