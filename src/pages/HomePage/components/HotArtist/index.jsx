import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Row, Col, Spin } from "antd";
import { RightOutlined } from "@ant-design/icons";
import HotArtistItem from "@HomePage/dumps/HotArtistItem";

import { getArtistChart } from "@actions/homeAction";

export default function HotArtist() {
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(getArtistChart());
		return () => {};
	}, [dispatch]);

	const { artistChart } = useSelector((state) => state.home.chart);

	if (artistChart) {
		const [first, ...rest] = artistChart;
		return (
			<>
				<h2 className="text-upper">
					Nghệ sĩ hot
					<RightOutlined />
				</h2>
				<Row gutter={16}>
					<Col span={8}>
						<HotArtistItem item={first} width={210} height={210} />
					</Col>
					<Col span={16}>
						<Row gutter={[10, 10]}>
							{rest.map((item, id) => (
								<Col span={6} key={id}>
									<HotArtistItem item={item} width={100} height={100} />
								</Col>
							))}
						</Row>
					</Col>
				</Row>
			</>
		);
	} else {
		return (
			<Row>
				<Col span={24}>
					<Spin size="large" />
				</Col>
			</Row>
		);
	}
}
