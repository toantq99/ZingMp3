import React from "react";
import "./style.scss";
import { SongDetail } from "@constants/types/songDetailTypes";
import { Album } from "@constants/types/albumTypes";
import { WeekChartType } from "@HomePage/mains/WeekChartList";
import WChartHeaderButtons from "../WChartHeaderButtons";
import WCharHeaderImage from "../WChartHeaderImage";
import WChartHeaderItem from "../WChartHeaderItem";

interface Props {
	item: SongDetail | Album;
	type: number;
}

const WChartHeader: React.FC<Props> = ({ item = {}, type }) => {
	return (
		<div className="wchart-header-wrapper">
			<WChartHeaderButtons />
			<WCharHeaderImage />
			<WChartHeaderItem />
		</div>
	);
};
export default WChartHeader;
