import React from "react";
import Thumbnail from "@GlobalComponents/Thumbnail";
import { Link } from "react-router-dom";
import { Row, Col } from "antd";
import "./style.scss";

export default function AlbumItem({ rank, item }) {
	const fakeCount = parseInt(Math.random() * 10000 + 10000);
	return (
		<Row align="middle" justify="space-between" className="album-item">
			<Col>
				<Row gutter={10}>
					<Col>
						<div className="album-img">
							<Thumbnail width={110} height={110} item={item} />
							<span className="album-rank">
								{rank < 10 ? "0" + rank : rank}{" "}
							</span>
						</div>
					</Col>
					<Col className="album-info">
						<div>
							<Link to={`/album/${item.id}`}>{item.title}</Link>
						</div>
						<div>{item.artist.name}</div>
						<div>{fakeCount}</div>
					</Col>
				</Row>
			</Col>
		</Row>
	);
}
