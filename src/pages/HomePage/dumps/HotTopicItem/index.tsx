import React from "react";
import { Link } from "react-router-dom";
import { Row, Col } from "antd";
import "./style.scss";

const HotTopicItem: React.FC<{ item: number }> = ({ item }) => {
	return (
		<Row gutter={[0, 10]}>
			<Col span={24}>
				<Link to="/">
					<img
						src="https://photo-zmp3.zadn.vn/cover/6/0/8/d/608d6474b6daa5563eb5c088ca08cc98.jpg"
						alt={item.toString()}
						className="img-topic"
					/>
				</Link>
			</Col>
		</Row>
	);
};

export default HotTopicItem;
