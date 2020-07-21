import React from "react";
import Header from "./Header";
import Body from "./Body";
import { RightOutlined, PlayCircleOutlined } from "@ant-design/icons";
import { Row, Col } from "antd";
import "./style.scss";

export default function WeekChart({ name, list, type }) {
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
			<Header type={type} />
			<Body type={type} />
		</div>
	);
}
