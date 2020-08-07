// Libs
import React from "react";
import { Link } from "react-router-dom";
import { PlayCircleFilled, ShareAltOutlined } from "@ant-design/icons";
// Components
import Tag from "@GlobalComponents/mains/Tag";
// Mocks
import { datetimeFormat } from "@mocks/chart";
// SCSS
import "./style.scss";

const ChartHeader: React.FC = () => {
	return (
		<div className="chart-header-wrapper">
			<span>
				<Tag content="#zingchart" />
				<Link to="/">
					<span className="date">{datetimeFormat(new Date())}</span>
					<PlayCircleFilled className="btn" />
				</Link>
			</span>
			<ShareAltOutlined className="btn" />
		</div>
	);
};
export default ChartHeader;
