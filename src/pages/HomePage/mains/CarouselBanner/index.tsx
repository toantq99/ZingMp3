import React from "react";
import { Carousel } from "antd";

import carouselList from "@mocks/carousel";
import BannerItem from "@pages/HomePage/atoms/BannerItem";
const CarouselBanner: React.FC = () => {
	return (
		<Carousel autoplay>
			{carouselList.map((item, id) => (
				<BannerItem key={id} item={item} />
			))}
		</Carousel>
	);
};

export default CarouselBanner;
