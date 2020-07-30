import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { PlayCircleFilled, ShareAltOutlined } from "@ant-design/icons";
import { Line } from "react-chartjs-2";
import Tag from "../../../GlobalComponents/Tag";
import Top5List from "./Top5List";
import Top3List from "./Top3List";
import "./style.scss";

import { getSongChart } from "../../../../actions/homeAction";
import { generateData, options, datetimeFormat } from "../../../../mocks/chart";

import withLoading from "../../../../HOCs/withLoading";
import { RootState } from "../../../../constants/state";

const Chart: React.FC = () => {
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(getSongChart());
	}, [dispatch]);

	const { songChart } = useSelector((state: RootState) => state.home.chart);
	const { isLoading = false, data = [] } = songChart;
	return withLoading(isLoading)(
		<div className="chart-wrapper">
			<div className="chart-container">
				<div className="chart-header">
					<span>
						<Tag content="#zingchart" />
						<Link to="/">
							<span className="date">{datetimeFormat(new Date())} </span>
							<PlayCircleFilled className="btn" />
						</Link>
					</span>
					<ShareAltOutlined className="btn" />
				</div>

				<Line
					data={generateData(data.slice(0, 3))}
					options={options}
					height={100}
					// className="chart-body"
				/>
				<Top3List list={data.slice(0, 3)} />
			</div>
			<Top5List list={data} />
		</div>
	);
};
export default Chart;
