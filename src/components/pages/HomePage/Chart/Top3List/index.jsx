import React from "react";
import { Row, Col } from "antd";
import Top3Item from "./Top3Item";

const topList = new Array(3);
topList.fill({
	name: "Cho anh say",
	singer: "Phan Duy Anh, ACV",
	percent: 38,
});

export default function Top3List() {
	return (
		<Row gutter={4}>
			{topList.map((item, id) => (
				<Col span={8} key={id}>
					<Top3Item rank={id + 1} item={item} />
				</Col>
			))}
		</Row>
	);
}
