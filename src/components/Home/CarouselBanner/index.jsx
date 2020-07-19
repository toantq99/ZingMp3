import React from "react";
import { Link } from "react-router-dom";
import { Carousel } from "antd";

export default function CarouselBanner() {
	return (
		<Carousel>
			{[1, 2, 3, 4].map((item) => (
				<div key={item}>
					<Link to="/">
						<img
							src="https://photo-zmp3.zadn.vn/banner/e/5/9/c/e59c3dd3f6db59d63a3a180fad5e5627.jpg"
							alt="main-banner"
							width="100%"
						/>
					</Link>
				</div>
			))}
		</Carousel>
	);
}
