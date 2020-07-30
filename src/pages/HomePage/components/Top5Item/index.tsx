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
import { SongDetail } from "../../../../constants/types/songDetailTypes";

interface Props {
	rank: number;
	item: SongDetail;
}

const Top5Item: React.FC<Props> = ({ rank, item }) => {
	const fakeStatus = Math.floor(Math.random() * 10 - 5);
	const fakeCount = Math.floor(Math.random() * 10000) + 10000;
	return (
		<Row
			gutter={10}
			align="middle"
			className={"top5-item-wrapper" + (rank === 5 ? "" : " border-bottom")}
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
				<>
					<div>
						<Link
							to={`/bai-hat/${item.id}`}
							title={item.title + " - " + item.artist.name}
						>
							{item.title}
						</Link>
					</div>
					<small>{item.artist.name}</small>
				</>
			</Col>
			<Col span={4}>
				<ButtonGroup item={item} />
			</Col>
			<Col span={2}>{fakeCount}</Col>
		</Row>
	);
};

export default Top5Item;
