import React from "react";
import { Link } from "react-router-dom";
import { Row, Col, Carousel, Spin } from "antd";

import carouselList from "../../../../mocks/carousel";
export default function CarouselBanner() {
	if (carouselList) {
		return (
			<Row>
				<Col span={24}>
					<Carousel autoplay>
						{carouselList.map((item, id) => (
							<div key={id}>
								<Link to="/">
									<img src={item.image} alt="main-banner" width="100%" />
								</Link>
							</div>
						))}
					</Carousel>

					{/* <Row justify="space-between">
						{carouselList.map((item, id) => (
							<Col key={id}>
								<img
									src={item.image}
									index={id}
									alt="small-banner"
									width={120}
								/>
							</Col>
						))}
					</Row> */}
				</Col>
			</Row>
		);
	} else
		return (
			<Row>
				<Col span={24} style={{ textAlign: "center" }}>
					<Spin size="large" />
				</Col>
			</Row>
		);
}
