import React, { useState } from "react";
import { Row, Col } from "antd";
import { Link } from "react-router-dom";
import ButtonGroup from "../../../../Global/ButtonGroup";
import "./style.scss";

export default function MusicItem({ rank, item }) {
	const [hovering, setHovering] = useState(false);
	return (
		<Row
			align="middle"
			justify="space-between"
			className={rank === 1 ? "music-item-1" : "music-item"}
			onMouseEnter={() => setHovering(true)}
			onMouseLeave={() => setHovering(false)}
		>
			<Col>
				<Row gutter={10} align="middle">
					<Col>{rank < 10 ? "0" + rank : rank} </Col>
					<Col>
						<div>
							<Link to="/">{item.name}</Link>
						</div>
						<div>{item.singer}</div>
					</Col>
				</Row>
			</Col>

			{hovering ? <ButtonGroup /> : <span>{item.count}</span>}
		</Row>
	);
}
