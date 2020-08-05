import React from "react";
import "./style.scss";
import { SongDetail } from "@constants/types/songDetailTypes";
import { Album } from "@constants/types/albumTypes";
import WChartTitle from "../WChartTitle";
import WChartHeader from "../WChartHeader";
import WChartBody from "../WChartBody";

interface Props {
	name: string;
	list: (SongDetail | Album)[];
	type: number;
}

const WeekChart: React.FC<Props> = ({ name, list, type }) => {
	const [top1, ...rest] = list;
	return (
		<div className="week-chart-wrapper">
			<WChartTitle name={name} />
			<WChartHeader item={top1} type={type} />
			<WChartBody list={rest} type={type} />
		</div>
	);
};
export default WeekChart;
