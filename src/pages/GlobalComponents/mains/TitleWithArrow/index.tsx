import React from "react";
import { RightOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
const TitleWithArrow = ({ title }) => {
	return (
		<Link to="/">
			<h2 className="title-with-arrow">
				{title}
				<RightOutlined />
			</h2>
		</Link>
	);
};

export default TitleWithArrow;
