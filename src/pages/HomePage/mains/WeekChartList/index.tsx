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
		<>
			<WeekChart
				name="#zingchar tuần - bài hát"
				list={weekChart.tracks}
				type={WeekChartType.Track}
			/>
			<WeekChart
				name="#zingchar tuần - Album"
				list={weekChart.albums}
				type={WeekChartType.Album}
			/>
		</>
	);
};
export default WeekChartList;
