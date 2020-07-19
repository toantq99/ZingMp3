import React from "react";
import HotTopicList from "../HotTopic";
import JustForYou from "../HotTopic/JustForYou";
import WeekChart from "./WeekChart";
import NewsList from "../News";
import { Row, Col } from "antd";

export default function TrendCol() {
	return (
		<div>
			<Row className="section">
				<Col span={24}>
					<JustForYou />
				</Col>
			</Row>
			<Row className="section">
				<Col span={24}>
					<HotTopicList />
				</Col>
			</Row>
			<Row className="section">
				<Col span={24}>
					<WeekChart name="#zingchart tuần - bài hát" />
				</Col>
			</Row>
			<Row className="section">
				<Col span={24}>
					<WeekChart name="#zingchart tuần - mv" type="mv" />
				</Col>
			</Row>
			<Row className="section">
				<Col span={24}>
					<WeekChart name="#zingchart tuần - album" type="album" />
				</Col>
			</Row>
			<Row className="section">
				<Col span={24}>
					<NewsList />
				</Col>
			</Row>
		</div>
	);
}
