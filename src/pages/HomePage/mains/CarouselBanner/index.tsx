// Libs
import React from "react";
import { Carousel } from "antd";
// Components
import BannerItem from "@HomePage/atoms/BannerItem";
// Mocks
import carouselList from "@mocks/carousel";

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
