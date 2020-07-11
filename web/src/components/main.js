import styled from "styled-components";
import { Link } from "react-router-dom";

export const Section = styled.div`
	z-index: 0;
	width: 100%;
	height: ${(props) => (props.primary ? "auto" : "100%")};
	background-color: ${(props) => (props.secondary ? "#FFF" : "#4bbde2")};
	display: flex;
	align-items: center;
	justify-content: center;

	opacity: 1;
	animation: fadeInOpacity 300ms ease-in;

	@media (max-width: 980px) {
		height: auto;
		flex-direction: column;
		align-items: center;
	}
`;

export const Main = styled.div`
	height: calc(100% - 0%);
	background-color: #4bbde2;

	@media (max-width: 980px) {
		height: auto;
	}
`;

export const Row = styled.div`
	padding: 1em 2em;
	width: 50%;
	height: 100%;
	display: flex;
	align-items: center;
	justify-content: center;

	@media (max-width: 980px) {
		width: 100%;
	}
`;

export const ExpandedRow = styled(Row)`
	width: 100%;
`;

export const Col = styled(Row)`
	flex-direction: column;
	text-align: start;
	align-items: flex-start;

	@media (max-width: 980px) {
		width: 100%;
		text-align: center;
		align-items: center;
	}
`;

export const Title = styled.h1`
	margin: 0 0 1em 0;
	font-family: "Poppins";
	font-style: normal;
	font-weight: 900;
	font-size: 48px;
	line-height: 54px;
	color: ${(props) => (props.primary ? "#4BBDE2" : "#FFF")};

	text-transform: uppercase;
`;

export const SubTitle = styled.p`
	font-family: "Roboto";
	font-style: normal;
	font-weight: normal;
	font-size: 18px;
	line-height: 28px;
	color: ${(props) => (props.primary ? "#1d1d1d" : "#FFF")};

	@media (max-width: 980px) {
		padding: 0 1em;
	}
`;

export const Button = styled(Link)`
	margin: 1em 0;
	padding: 8px 40px;

	text-decoration: none;
	font-family: "Roboto";
	font-style: normal;
	font-weight: bold;
	font-size: 18px;
	line-height: 21px;
	text-align: center;
	text-transform: uppercase;
	color: #fff;

	background-color: ${(props) => (props.primary ? "#4BBDE2" : "transparent")};
	border: ${(props) => (props.primary ? "none" : "1px solid #FFF")};
	border-radius: 29px;
`;
