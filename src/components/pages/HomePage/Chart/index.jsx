import React from "react";
import { Row, Col } from "antd";
import { PlayCircleFilled, ShareAltOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import Tag from "../../../Global/Tag";
import Top5List from "./Top5List";
import Top3List from "./Top3List";
import "./style.scss";

const datetimeFormat = (date) => {
	let dd = date.getDate();
	let mm = date.getMonth() + 1;
	let yyyy = date.getFullYear();
	let hh = date.getHours();
	let min = date.getMinutes();
	if (dd < 10) dd = "0" + dd;
	if (mm < 10) mm = "0" + mm;
	if (hh < 10) hh = "0" + hh;
	if (min < 10) min = "0" + min;
	return dd + "/" + mm + "/" + yyyy + " " + hh + ":" + min;
};

export default function Chart() {
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
					<Row>
						<Col span={24}>
							<Top3List />
						</Col>
					</Row>
				</div>
			</Col>
			<Col span={24}>
				<Top5List />
			</Col>
		</Row>
	);
}
