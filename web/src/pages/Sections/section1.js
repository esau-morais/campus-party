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
				<Title>Orbis</Title>
				<SubTitle>
					O projeto Orbis é uma solução com o objetivo de auxiliar através de
					consultorias para as empresas implementarem o ODS 17 que é núcleo que
					liga todos os ODS e trata das parcerias e implementações, conseguindo
					assim impactar a sociedade, o meio ambiente e proporcionar as
					vantagens que as empresas necessitam para se adequar a esse novo
					mercado moderno.
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
