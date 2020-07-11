import React from "react";
import Carousel from "react-elastic-carousel";

import { Images } from "./sobre";
import { SubTitle } from "../main";

const breakPoints = [
	{ width: 1, itemsToShow: 1 },
	{ width: 550, itemsToShow: 1 },
	{ width: 768, itemsToShow: 1 },
	{ width: 1200, itemsToShow: 1 }
];

const Container = {
	display: "flex",
	alignItems: "center"
};

const Avatar = {
	width: 66,
	height: 66,
	margin: "0 1em 0 0"
};

function SobreCarousel() {
	return (
		<Carousel
			breakPoints={breakPoints}
			verticalMode={true}
			showArrows={false}
			enableAutoPlay={true}
			autoPlaySpeed={6000}
		>
			{Images.map((image) => (
				<div key={image.id}>
					<SubTitle primary="true">{image.sobre}</SubTitle>
					<div style={Container}>
						<img src={image.img_url} alt="Imagem" style={Avatar} />
						<span>{image.skill}</span>
					</div>
				</div>
			))}
		</Carousel>
	);
}

export default SobreCarousel;
