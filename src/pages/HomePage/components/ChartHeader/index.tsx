import React from "react";
import { Tag } from "antd";
import { Link } from "react-router-dom";
import { PlayCircleFilled, ShareAltOutlined } from "@ant-design/icons";
import { datetimeFormat } from "@mocks/chart";

const ChartHeader = () => {
	return (
		<div className="chart-header-wrapper">
			<span>
				<Tag content="#zingchart" />
				<Link to="/">
					<span className="date">{datetimeFormat(new Date())} </span>
					<PlayCircleFilled className="btn" />
				</Link>
			</span>
			<ShareAltOutlined className="btn" />
		</div>
	);
};
export default ChartHeader;
