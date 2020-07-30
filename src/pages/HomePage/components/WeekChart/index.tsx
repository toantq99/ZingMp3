import React from "react";
import Header from "./Header";
import Body from "./Body";
import { RightOutlined, PlayCircleOutlined } from "@ant-design/icons";
import "./style.scss";
import { SongDetail } from "../../../../constants/types/songDetailTypes";
import { Album } from "../../../../constants/types/albumTypes";

interface Props {
	name: string;
	list: (SongDetail | Album)[];
	type: number;
}

const WeekChart: React.FC<Props> = ({ name, list, type }) => {
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
			<Header item={top1} type={type} />
			<Body list={rest} type={type} />
		</div>
	);
};
export default WeekChart;
