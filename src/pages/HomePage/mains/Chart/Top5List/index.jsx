import React from "react";
import { Row, Col, Spin } from "antd";
import Top5Item from "@HomePage/components/Top5Item";

export default function Top5List({ list }) {
	return (
		<Row>
			{list ? (
				list.map((item, id) => (
					<Col span={24} key={id}>
						<Top5Item item={item} rank={id + 1} />
					</Col>
				))
			) : (
				<Col span={24} style={{ textAlign: "center" }}>
					<Spin size="large" />
				</Col>
			)}
		</Row>
	);
}
