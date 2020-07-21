import React from "react";
import { Link } from "react-router-dom";
import { Row, Col } from "antd";
import {
	CaretUpOutlined,
	LineOutlined,
	CaretDownOutlined,
} from "@ant-design/icons";
import Thumbnail from "../../../../../Global/Thumbnail";
import ButtonGroup from "../../../../../Global/ButtonGroup";
import "./style.scss";

export default function Top5Item({ rank, item }) {
	return (
		<Row className={"top5-item" + (rank === 5 ? "" : " border-bottom")}>
			<Col span={1}>
				<div className={`rank-${rank}`}>{rank}</div>
			</Col>
			<Col span={2}>
				{item.status > 0 ? (
					<div className="status-up">
						<CaretUpOutlined />
						{item.status}
					</div>
				) : item.status < 0 ? (
					<div className="status-down">
						<CaretDownOutlined />
						{-item.status}
					</div>
				) : (
					<div className="status-neutral">
						<LineOutlined />
					</div>
				)}
			</Col>
			<Col span={3}>
				<Thumbnail
					width={60}
					height={60}
					src="https://photo-resize-zmp3.zadn.vn/w94_r1x1_jpeg/cover/1/3/c/4/13c41aade59ccbc1d6a5819050ca8c65.jpg"
				/>
			</Col>
			<Col span={12}>
				<div>
					<Link to="/" title={item.name + " - " + item.singer}>
						<div>{item.name}</div>
					</Link>
					<small>{item.singer}</small>
				</div>
			</Col>
			<Col span={4}>
				<ButtonGroup mv={item.mv} marginRight={30} />
			</Col>
			<Col span={2}>{item.count}</Col>
		</Row>
	);
}
