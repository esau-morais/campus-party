import React from "react";

import { Section, Title, SubTitle, Col } from "../../components/main";
import ImgCarousel from "../../components/Carousel";

const SectionTwo = () => {
	return (
		<Section id="ods" primary="true" secondary="true">
			<Col>
				<Title primary="true">O que são ODS?</Title>
				<SubTitle primary="true">
					Os Objetivos de Desenvolvimento Sustentável (ODS) são uma agenda
					mundial adotada durante a Cúpula das Nações Unidas sobre o
					Desenvolvimento Sustentável em setembro de 2015 composta por 17
					objetivos e 169 metas a serem atingidos até 2030.
				</SubTitle>
			</Col>
			<Col>
				<ImgCarousel />
			</Col>
		</Section>
	);
};

export default SectionTwo;
