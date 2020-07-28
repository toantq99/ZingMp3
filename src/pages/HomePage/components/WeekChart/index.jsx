import React from "react";
import Header from "./Header";
import Body from "./Body";
import { RightOutlined, PlayCircleOutlined } from "@ant-design/icons";
import "./style.scss";

export default function WeekChart({ name, type, list }) {
	const [top1, ...rest] = list;
	return (
		<div className="week-chart-wrapper">
			<div className="week-chart-top">
				<h3 className="title">
					{name}
					<RightOutlined />
				</h3>

				<PlayCircleOutlined className="play-btn" />
			</div>
			<Header type={type} item={top1} />
			<Body type={type} list={rest} />
		</div>
	);
}
