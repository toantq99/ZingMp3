import React from "react";
import { PlayCircleOutlined } from "@ant-design/icons";
import TitleWithArrow from "@GlobalComponents/mains/TitleWithArrow";

const WChartTitle = ({ name }) => {
	return (
		<div className="week-chart-title-wrapper">
			<TitleWithArrow title={name} />
			<PlayCircleOutlined className="play-btn" />
		</div>
	);
};

export default WChartTitle;
