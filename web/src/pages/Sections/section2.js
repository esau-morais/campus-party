import React from "react";

import { Section, Title, SubTitle, Col } from "../../components/main";
import ImgCarousel from "../../components/Carousel";

const SectionTwo = () => {
	return (
		<Section id="ods" primary="true" secondary="true">
			<Col>
				<Title primary="true">O que são ODS?</Title>
				<SubTitle primary="true">
					Lorem Ipsum is simply dummy text of the printing and typesetting
					industry. Lorem Ipsum has been the industry's standard dummy text ever
					since the 1500sLorem Ipsum. Lorem Ipsum is simply dummy text of the
					printing and typesetting industry. Lorem Ipsum has been the industry's
					standard dummy text ever since the 1500sLorem Ipsum.
				</SubTitle>
			</Col>
			<Col>
				<ImgCarousel />
			</Col>
		</Section>
	);
};

export default SectionTwo;
