import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Header from "./Header";
import Body from "./Body";
import { RightOutlined, PlayCircleOutlined } from "@ant-design/icons";
import { Row, Col, Spin } from "antd";
import "./style.scss";

import { getWeekChart } from "@actions/homeAction";

export default function WeekChart({ name, type, query }) {
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(getWeekChart(query, type === "song" ? 10 : 5));
		return () => {};
	}, [dispatch, query, type]);

	const list = useSelector((state) => state.home.weekChart[query]);

	if (list) {
		const [top1, ...rest] = list;
		return (
			<div className="wchart">
				<Row align="middle" justify="space-between">
					<Col>
						<h3 className="title">
							{name}
							<RightOutlined />
						</h3>
					</Col>
					<Col>
						<PlayCircleOutlined className="play-btn" />
					</Col>
				</Row>
				<Header type={type} item={top1} />
				<Body type={type} list={rest} />
			</div>
		);
	} else {
		return (
			<div className="wchart">
				<Row align="middle" justify="space-between">
					<Col span={24} style={{ textAlign: "center" }}>
						<Spin size="large" />
					</Col>
				</Row>
			</div>
		);
	}
}
