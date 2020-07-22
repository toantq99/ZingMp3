import React from "react";
import { Link } from "react-router-dom";
import { Row, Col } from "antd";
import {
	CaretUpOutlined,
	LineOutlined,
	CaretDownOutlined,
} from "@ant-design/icons";
import Thumbnail from "../../../GlobalComponents/Thumbnail";
import ButtonGroup from "../../../GlobalComponents/ButtonGroup";

import "./style.scss";

export default function Top5Item({ rank, item }) {
	const fakeStatus = parseInt(Math.random() * 10 - 5);
	const fakeCount = parseInt(Math.random() * 10000) + 10000;
	return (
		<Row
			gutter={10}
			className={"top5-item" + (rank === 5 ? "" : " border-bottom")}
		>
			<Col span={1}>
				<div className={`rank-${rank}`}>{rank}</div>
			</Col>
			<Col span={2}>
				{fakeStatus > 0 ? (
					<div className="status-up">
						<CaretUpOutlined />
						{fakeStatus}
					</div>
				) : fakeStatus < 0 ? (
					<div className="status-down">
						<CaretDownOutlined />
						{-fakeStatus}
					</div>
				) : (
					<div className="status-neutral">
						<LineOutlined />
					</div>
				)}
			</Col>
			<Col>
				<Thumbnail width={60} height={60} item={item} />
			</Col>
			<Col span={12}>
				<div>
					<Link to="/" title={item.title + " - " + item.artist.name}>
						<div>{item.title}</div>
					</Link>
					<small>{item.artist.name}</small>
				</div>
			</Col>
			<Col span={4}>
				<ButtonGroup item={item} />
			</Col>
			<Col span={2}>{fakeCount}</Col>
		</Row>
	);
}
