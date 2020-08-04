import React from "react";
import { Link } from "react-router-dom";
import { Carousel } from "antd";

import carouselList from "@mocks/carousel";
const CarouselBanner: React.FC = () => {
	return (
		<Carousel autoplay>
			{carouselList.map((item, id) => (
				<div key={id}>
					<Link to="/">
						<img src={item.image} alt="main-banner" width="100%" />
					</Link>
				</div>
			))}
		</Carousel>
	);
};

export default CarouselBanner;
