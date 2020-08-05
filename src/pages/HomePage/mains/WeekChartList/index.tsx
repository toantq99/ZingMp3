import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import WeekChart from "@HomePage/components/WeekChart";
import { getWeekChart } from "@actions/homeAction";

import withLoading from "@HOCs/withLoading";
import { RootState } from "@constants/state";

export enum WeekChartType {
	Track = 0,
	Album = 1,
}

const WeekChartList: React.FC = () => {
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(getWeekChart(["tracks", "albums"]));
		return () => {};
	}, [dispatch]);

	const weekChart = useSelector((state: RootState) => state.home.weekChart);
	const { isLoading = true } = weekChart;
	return withLoading(isLoading)(
		<div className="weekchart-list-wrapper">
			<WeekChart
				name="#zingchart tuần - bài hát"
				list={weekChart.tracks}
				type={WeekChartType.Track}
			/>
			<WeekChart
				name="#zingchart tuần - Album"
				list={weekChart.albums}
				type={WeekChartType.Album}
			/>
		</div>
	);
};
export default WeekChartList;
