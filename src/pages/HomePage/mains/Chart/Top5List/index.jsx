import React from "react";
import { Row, Col, Spin } from "antd";
import Top5Item from "@HomePage/components/Top5Item";

export default function Top5List({ list }) {
	return list ? (
		<Row>
			{list.map((item, id) => (
				<Col span={24} key={id}>
					<Top5Item item={item} rank={id + 1} />
				</Col>
			))}
		</Row>
	) : (
		<Row>
			<Col span={24}>
				<Spin size="large" />
			</Col>
		</Row>
	);
}
