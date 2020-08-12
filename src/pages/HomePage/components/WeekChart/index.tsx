// Libs
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
// Components
import withFetching from "@HOCs/withFetching";
import WChartTitle from "../WChartTitle";
import WChartHeader from "../WChartHeader";
import WChartBody from "../WChartBody";
// Types
import { MainTypes } from "@constants/DataTypes/HomeTypes";
import { RootState } from "@constants/State";
// Actions
import { getWeekChartTracks, getWeekChartAlbums } from "@actions/HomeAction";
// SCSS
import "./style.scss";

interface Props {
	name: string;
	type: MainTypes;
}

const WeekChart: React.FC<Props> = ({ name, type }) => {
	const dispatch = useDispatch();
	const typeName = type === MainTypes.Track ? "tracks" : "albums";
	useEffect(() => {
		dispatch(
			type === MainTypes.Track ? getWeekChartTracks() : getWeekChartAlbums()
		);
	}, [dispatch, type]);
	const { isLoading, data, error } = useSelector(
		(state: RootState) => state.home.weekChart[typeName]
	);
	const [top1, ...rest] = data || [];
	return withFetching({ isLoading, error, title: name })(
		<div className="week-chart-wrapper">
			<WChartTitle name={name} />
			<WChartHeader item={top1} type={type} />
			<WChartBody list={rest} type={type} />
		</div>
	);
};
export default WeekChart;
