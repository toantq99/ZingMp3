import React from "react";
import { Row, Col } from "antd";
import { RightOutlined } from "@ant-design/icons";
import NewsItem from "@HomePage/dumps/NewsItem";
import NewsHeader from "@HomePage/dumps/NewsHeader";

export default function News() {
	return (
		<Row gutter={[0, 10]}>
			<h4 className="text-upper">
				Tin tức âm nhạc
				<RightOutlined />
			</h4>
			<Col span={24}>
				<NewsHeader
					content={"Giải mã kỷ lục 500 triệu lượt nghe của ‘Sóng gió’"}
				/>
			</Col>
			<Col span={24}>
				{[1, 2, 3, 4, 5].map((item) => (
					<NewsItem key={item} />
				))}
			</Col>
		</Row>
	);
}
