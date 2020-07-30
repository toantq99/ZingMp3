import React from "react";
import { Row, Col } from "antd";
import { RightOutlined } from "@ant-design/icons";
import NewsItem from "../../dumps/NewsItem";
import NewsHeader from "../../dumps/NewsHeader";

const News: React.FC = () => {
	return (
		<Row gutter={[0, 10]}>
			<h4>
				TIN TỨC ÂM NHẠC
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
};
export default News;
