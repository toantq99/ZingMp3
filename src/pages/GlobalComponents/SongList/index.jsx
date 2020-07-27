import React from "react";
import SongItem from "./SongItem";
import { RightOutlined } from "@ant-design/icons";
import { Row, Col, Spin } from "antd";

export default function SongList({ name, list, size }) {
	return (
		<div>
			<h2 className="text-upper">
				{name} <RightOutlined />
			</h2>
			<Row>
				{list ? (
					list.map((item, id) => (
						<Col span={24} key={id}>
							<SongItem item={item} rank={id + 1} size={size} />
						</Col>
					))
				) : (
					<Col span={24} style={{ textAlign: "center" }}>
						<Spin size="large" />
					</Col>
				)}
			</Row>
		</div>
	);
}
