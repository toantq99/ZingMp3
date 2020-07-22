import React from "react";
import Thumbnail from "../../../../GlobalComponents/Thumbnail";
import { Link } from "react-router-dom";
import { Row, Col } from "antd";
import "./style.scss";

export default function MvItem({ rank, item }) {
	const fakeCount = parseInt(Math.random() * 10000 + 10000);

	return (
		<Row
			align="middle"
			justify="space-between"
			className={rank === 10 ? "mv-item" : "mv-item border-bottom"}
		>
			<Col>
				<Row gutter={10}>
					<Col>
						<div className="mv-img">
							<Thumbnail width={110} height={60} item={item} />
							<span className="mv-rank">{rank < 10 ? "0" + rank : rank} </span>
						</div>
					</Col>
					<Col>
						<div>
							<Link to="/">{item.title}</Link>
						</div>
						<div>
							<small>{item.artist.name}</small>
						</div>
						<div>
							<small>{fakeCount}</small>
						</div>
					</Col>
				</Row>
			</Col>
		</Row>
	);
}
