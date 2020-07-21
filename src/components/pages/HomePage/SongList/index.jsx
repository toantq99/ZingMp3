import React from "react";
import SongItem from "./SongItem";
import { RightOutlined } from "@ant-design/icons";
import { Row, Col } from "antd";

export default function SongList({ name, list }) {
	return (
		<div>
			<h2 className="text-upper">
				{name} <RightOutlined />
			</h2>
			<Row>
				{list.map((item, id) => (
					<Col span={24} key={id}>
						<SongItem item={item} rank={id + 1} />
					</Col>
				))}
			</Row>
		</div>
	);
}
