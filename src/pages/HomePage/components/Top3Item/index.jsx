import React from "react";
import "./style.scss";
import { Row, Col } from "antd";

export default function Top3Item({ rank, item }) {
	const fakePercent = parseInt(Math.random() * 50);
	return (
		<Row align="middle" className="top3-item">
			<Col flex="15px" className={`rank-${rank}`}>
				{"0" + rank}
			</Col>
			<Col flex="38px">
				<img
					src={item.album.cover_small}
					alt="singer img"
					className="top3-img"
				/>
			</Col>
			<Col flex="auto">
				<div className="title">{item.title_short}</div>
				<small>{item.artist.name}</small>
			</Col>

			<Col flex="28px" className={`rank-${rank}`}>
				{fakePercent + "%"}
			</Col>
		</Row>
	);
}
