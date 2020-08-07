// Libs
import React from "react";
import { RightOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
// SCSS
import "./style.scss";

const TitleWithArrow: React.FC<{ title: string }> = ({ title }) => {
	return (
		<Link to="/">
			<h2 className="title-with-arrow-wrapper">
				{title}
				<RightOutlined />
			</h2>
		</Link>
	);
};

export default TitleWithArrow;
