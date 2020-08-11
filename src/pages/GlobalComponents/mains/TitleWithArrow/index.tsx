// Libs
import React from "react";
import { RightOutlined } from "@ant-design/icons";
// SCSS
import "./style.scss";

const TitleWithArrow: React.FC<{ title: string }> = ({ title }) => {
	return (
		<h2 className="title-with-arrow-wrapper">
			{title}
			<RightOutlined />
		</h2>
	);
};

export default TitleWithArrow;
