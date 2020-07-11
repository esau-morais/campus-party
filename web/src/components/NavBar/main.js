import styled from "styled-components";

/* Styled TopBar */
export const Nav = styled.nav`
	overflow: hidden;
	width: 100%;
	height: 84px;
	display: flex;
	align-items: center;
	justify-content: space-evenly;
`;

export const Logo = styled.div`
	margin: 0 0 0 1em;
	width: 182px;
	height: 102.92px;
	background: url("/images/Logo.svg");
`;

/* Styled SideBar */
export const Items = styled.ul`
	overflow: auto;
	list-style: none;
	display: flex;
	flex-flow: row nowrap;
	align-items: center;

	li {
		padding: 18px 10px 18px 0;
	}

	@media (max-width: 980px) {
		flex-flow: column nowrap;
		background-color: #3397d8;
		position: fixed;
		z-index: 1;
		transform: ${({ open }) => (open ? "translateX(0)" : "translateX(100%)")};
		top: 0;
		right: 0;
		height: 100%;
		width: 100%;
		justify-content: center;
		transition: transform 0.3s ease-in-out;
	}
`;

export const Item = styled.a`
	margin: 0 2em 0 0;
	font-family: "Roboto";
	font-style: normal;
	font-weight: bold;
	font-size: 18px;
	line-height: 21px;
	text-transform: uppercase;
	text-decoration: none;
	color: #fff;

	:focus,
	:hover,
	:active {
		border-bottom: 3px solid #00738b;
	}

	@media (max-width: 980px) {
		margin: 0 0;
	}
`;

export const Button = styled(Item)`
	margin: ${(props) => (props.primary ? "0 1em 0 0" : "0 0")};
	justify-content: center;
	padding: 4px 24px;
	background-color: ${(props) => (props.primary ? "#4BBDE2" : "transparent")};
	color: ${(props) => (props.primary ? "#4BBDE2" : "#FFF")};
	border: ${(props) => (props.primary ? "none" : "1px solid #FFF")};
	border-radius: 29px;

	:focus,
	:hover {
		border: ${(props) => (props.primary ? "none" : "1px solid #FFF")};
	}

	@media (max-width: 980px) {
		color: ${(props) => (props.primary ? "#241F21" : "#FFF")};
		border: ${(props) => (props.primary ? "none" : "1px solid #FFF")};

		:focus,
		:hover {
			border: ${(props) => (props.primary ? "none" : "1px solid #FEB42F")};
		}
	}
`;
