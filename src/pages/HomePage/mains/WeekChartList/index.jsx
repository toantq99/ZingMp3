import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import WeekChart from "@HomePage/components/WeekChart";
import { getWeekChart } from "@actions/homeAction";

import withLoading from "@HOCs/withLoading";
export default function WeekChartList() {
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(getWeekChart(["tracks", "albums"]));
		return () => {};
	}, [dispatch]);

	const weekChart = useSelector((state) => state.home.weekChart);
	const { isLoading = true } = weekChart;
	return withLoading(isLoading)(
		<>
			<WeekChart
				name="#zingchar tuần - bài hát"
				type="tracks"
				list={weekChart.tracks || []}
			/>
			<WeekChart
				name="#zingchar tuần - Album"
				type="album"
				list={weekChart.albums || []}
			/>
		</>
	);
}
