import React from "react";
import Thumbnail from "../../../../Global/Thumbnail";
import { Link } from "react-router-dom";
import { Row, Col } from "antd";
import "./style.scss";

export default function MvItem({ rank, item }) {
	return (
		<Row align="middle" justify="space-between" className="album-item">
			<Col>
				<Row gutter={10}>
					<Col>
						<div className="album-img">
							<Thumbnail
								width={110}
								height={110}
								src="https://photo-resize-zmp3.zadn.vn/w240_r1x1_jpeg/cover/f/1/7/a/f17a4a23d78d15ea791ab46e930f1da3.jpg"
							/>
							<span className="album-rank">
								{rank < 10 ? "0" + rank : rank}{" "}
							</span>
						</div>
					</Col>
					<Col>
						<div>
							<Link to="/">{item.name}</Link>
						</div>
						<div>
							<small>{item.singer}</small>
						</div>
						<div>
							<small>{item.count}</small>
						</div>
					</Col>
				</Row>
			</Col>
		</Row>
	);
}
