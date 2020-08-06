// Libs
import React from "react";
import { PlayCircleOutlined } from "@ant-design/icons";
// SCSS
import "./style.scss";

const WChartTitle: React.FC<{ name: string }> = ({ name }) => {
	return (
		<div className="weekchart-title-wrapper">
			<h3>{name}</h3>
			<PlayCircleOutlined className="play-btn" />
		</div>
	);
};

export default WChartTitle;
