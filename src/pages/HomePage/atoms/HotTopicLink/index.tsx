import React from "react";
import { Link } from "react-router-dom";
import { RightOutlined } from "@ant-design/icons";
const HotTopicLink = () => {
	return (
		<Link to="/" className="hot-topic-link-wrapper">
			Xem thêm chủ đề <RightOutlined />
		</Link>
	);
};

export default HotTopicLink;
