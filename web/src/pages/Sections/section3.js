import React from "react";
import styled from "styled-components";

import { Section, Title, SubTitle, Col } from "../../components/main";
import ImgCarousel from "../../components/Sobre";

const Image = styled.div`
	width: 100%;
	height: 80vh;
	background: url("/images/Sobre.png") no-repeat center center;
	background-size: contain;
	opacity: 1;
	animation: fadeInOpacity 300ms ease-in;
`;

const SectionThree = () => {
	return (
		<Section id="sobre" primary="true" secondary="true">
			<Col>
				<Title primary="true">Sobre</Title>
				<ImgCarousel />
			</Col>
			<Col>
				<Image />
			</Col>
		</Section>
	);
};

export default SectionThree;
