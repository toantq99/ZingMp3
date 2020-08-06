// Libs
import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
// Components
import withLoading from "@HOCs/withLoading";
import WeekChart from "@HomePage/components/WeekChart";
// Types
import { RootState } from "@constants/state";
import { WeekChartType } from "@constants/types/homeTypes";
// Actions
import { getWeekChart } from "@actions/homeAction";

const WeekChartList: React.FC = () => {
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(getWeekChart(["tracks", "albums"]));
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
