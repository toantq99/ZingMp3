import React from "react";
import { Row, Col } from "antd";
import LoveCollection from "./LoveCollection";
import HotVideo from "./HotVideo";
import HotAlbum from "./HotAlbum";

export default function Collection() {
	return (
		<Row gutter={[16, 16]}>
			<Col span={24}>
				<LoveCollection />
			</Col>
			<Col span={24}>
				<HotVideo />
			</Col>
			<Col span={24}>
				<HotAlbum />
			</Col>
		</Row>
	);
}
