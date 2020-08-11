// Libs
import React from "react";
// Components
import WeekChart from "@HomePage/components/WeekChart";
// Types
import { MainTypes } from "@constants/DataTypes/HomeTypes";

const WeekChartList: React.FC = () => {
	return (
		<div className="weekchart-list-wrapper">
			<WeekChart name="#zingchart tuần - bài hát" type={MainTypes.Track} />
			<WeekChart name="#zingchart tuần - Album" type={MainTypes.Album} />
		</div>
	);
};
export default WeekChartList;
