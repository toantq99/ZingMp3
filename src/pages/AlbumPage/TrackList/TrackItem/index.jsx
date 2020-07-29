import React from "react";
import { Row, Col } from "antd";
import { Link } from "react-router-dom";
import { ThunderboltTwoTone } from "@ant-design/icons";
import "./style.scss";

export default function TrackItem({
	item,
	isPlaying,
	setCurrentTrackIndex,
	index,
}) {
	return (
		<Row
			align="middle"
			justify="space-between"
			className={"track-item-wrapper" + (isPlaying ? " track-item-active" : "")}
			onClick={() => setCurrentTrackIndex(index)}
		>
			<Col>
				<div className="title">
					<Link to={`/bai-hat/${item.id}`}>{item.title_short}</Link>
				</div>
				<div>{(item.artist || {}).name}</div>
			</Col>

			<Col flex="20px">{isPlaying ? <ThunderboltTwoTone spin /> : null}</Col>
		</Row>
	);
}
