import React from "react";
import { Row, Col, Spin } from "antd";
import Top3Item from "@HomePage/components/Top3Item";

export default function Top3List({ list }) {
	return (
		<Row gutter={4}>
			{list ? (
				list.map((item, id) => (
					<Col span={8} key={id}>
						<Top3Item rank={id + 1} item={item} />
					</Col>
				))
			) : (
				<Col span={24} style={{ textAlign: "center" }}>
					<Spin size="small" />
				</Col>
			)}
		</Row>
	);
}
