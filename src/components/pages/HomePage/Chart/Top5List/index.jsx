import React from "react";
import { Row, Col } from "antd";
import Top5Item from "./Top5Item";

const list = [
	{
		name: "Cho Anh Say",
		singer: "Phan Duy Anh, ACV",
		count: "20,048",
		status: 0,
		mv: "abc",
	},
	{
		name: "Bigcityboi",
		singer: "Phan Duy Anh, ACV",
		count: "20,048",
		status: 1,
		mv: "abc",
	},
	{
		name: "Cứ thế rời xa",
		singer: "Phan Duy Anh, ACV",
		count: "20,048",
		status: -1,
	},
	{
		name: "Em không sai chúng ta sai",
		singer: "Phan Duy Anh, ACV",
		count: "20,048",
		status: 0,
		mv: "abc",
	},
	{
		name: "Em đang bận yêu ai",
		singer: "Phan Duy Anh, ACV",
		count: "20,048",
		status: 0,
	},
];

export default function Top5List() {
	return (
		<Row>
			{list.map((item, id) => (
				<Col span={24} key={id}>
					<Top5Item item={item} rank={id + 1} />
				</Col>
			))}
		</Row>
	);
}
