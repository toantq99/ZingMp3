import React from "react";
import Thumbnail from "../../../../Global/Thumbnail";
import { Link } from "react-router-dom";
import { Row, Col } from "antd";
import "./style.scss";

export default function MvItem({ rank, item }) {
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
							<Thumbnail
								width={110}
								height={60}
								src="https://photo-resize-zmp3.zadn.vn/w240_r16x9_jpeg/thumb_video/f/9/6/f/f96f21106a5dc67baa8bd5f06e8e97fc.jpg"
							/>
							<span className="mv-rank">{rank < 10 ? "0" + rank : rank} </span>
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
