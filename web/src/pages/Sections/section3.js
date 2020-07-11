import React from "react";
import styled from "styled-components";

import { Section, Title, SubTitle, Col } from "../../components/main";

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
				<SubTitle primary="true">
					Lorem Ipsum is simply dummy text of the printing and typesetting
					industry. Lorem Ipsum has been the industry's standard dummy text ever
					since the 1500sLorem Ipsum. Lorem Ipsum is simply dummy text of the
					printing and typesetting industry. Lorem Ipsum has been the industry's
					standard dummy text ever since the 1500sLorem Ipsum.
				</SubTitle>
			</Col>
			<Col>
				<Image />
			</Col>
		</Section>
	);
};

export default SectionThree;
