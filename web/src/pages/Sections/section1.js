import React from "react";
import styled from "styled-components";

import { Section, Col, Title, SubTitle, Button } from "../../components/main";

const Image = styled.div`
	width: 100%;
	height: 60vh;
	background: url("/images/Main.png") no-repeat center center;
	background-size: contain;
	opacity: 1;
	animation: fadeInOpacity 300ms ease-in;
`;

const SectionOne = () => {
	return (
		<Section id="home" primary="true">
			<Col>
				<Title>lorem ipsum</Title>
				<SubTitle>
					Lorem Ipsum is simply dummy text of the printing and typesetting
					industry. Lorem Ipsum has been the industry's standard dummy text ever
					since the 1500s
				</SubTitle>
				<Button to="analise">Faça sua análise</Button>
			</Col>
			<Col>
				<Image />
			</Col>
		</Section>
	);
};

export default SectionOne;
