import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { Row, Col, Spin } from "antd";
import { PlayCircleFilled, ShareAltOutlined } from "@ant-design/icons";
import { Line } from "react-chartjs-2";
import Tag from "@GlobalComponents/Tag";
import Top5List from "./Top5List";
import Top3List from "./Top3List";
import "./style.scss";

import { getSongChart } from "@actions/homeAction";
import { generateData, options, datetimeFormat } from "@mocks/chart";

export default function Chart() {
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(getSongChart());
		return () => {};
	}, [dispatch]);

	const { songChart } = useSelector((state) => state.home.chart);

	if (songChart) {
		return (
			<Row>
				<Col span={24}>
					<div className="chart-container">
						<Row>
							<Col span={12}>
								<div>
									<Tag content="#zingchart" />
									<Link to="/">
										<span className="date">{datetimeFormat(new Date())} </span>
										<PlayCircleFilled className="btn" />
									</Link>
								</div>
							</Col>
							<Col span={12} className="pull-right">
								<ShareAltOutlined className="btn" />
							</Col>
						</Row>
						<Line
							data={generateData(songChart.slice(0, 3))}
							options={options}
							height={100}
						/>

						<Row>
							<Col span={24}>
								<Top3List list={songChart ? songChart.slice(0, 3) : null} />
							</Col>
						</Row>
					</div>
				</Col>
				<Col span={24}>
					<Top5List list={songChart} />
				</Col>
			</Row>
		);
	} else
		return (
			<Row>
				<Col span={24}>
					<Spin size="large" />
				</Col>
			</Row>
		);
}
