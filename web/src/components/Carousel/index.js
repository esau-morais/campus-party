import React from "react";
import Carousel from "react-elastic-carousel";
import { Images } from "./images";

const breakPoints = [
	{ width: 1, itemsToShow: 1 },
	{ width: 550, itemsToShow: 2 },
	{ width: 768, itemsToShow: 3 },
	{ width: 1200, itemsToShow: 4 }
];

function ImgCarousel() {
	return (
		<Carousel
			breakPoints={breakPoints}
			showArrows={false}
			enableAutoPlay={true}
			autoPlaySpeed={3000}
		>
			{Images.map((image) => (
				<div key={image.id}>
					<img src={image.img_url} alt="Imagem" />
				</div>
			))}
		</Carousel>
	);
}

export default ImgCarousel;
