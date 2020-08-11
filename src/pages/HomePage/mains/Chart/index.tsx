// Libs
import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
// Components
import withFetching from "@HOCs/withFetching";
import ChartHeader from "@HomePage/components/ChartHeader";
import LineChart from "@HomePage/atoms/LineChart";
import Top3List from "../../components/Top3List";
import Top5List from "@HomePage/components/Top5List";
// Types
import { RootState } from "@constants/State";
// Actions
import { getTrackChart } from "@actions/HomeAction";
// SCSS
import "./style.scss";

const Chart: React.FC = () => {
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(getTrackChart());
	}, [dispatch]);

	const { isLoading, data = [], error } = useSelector(
		(state: RootState) => state.home.trackChart
	);
	return withFetching({ isLoading, error, title: "Zing Chart" })(
		<div className="chart-wrapper">
			<div className="chart-container">
				<ChartHeader />
				<LineChart data={data || []} />
				<Top3List list={(data || []).slice(0, 3)} />
			</div>
			<Top5List list={data || []} />
		</div>
	);
};
export default Chart;
