import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Row, Col } from "antd";
import Thumbnail from "../../../../Global/Thumbnail";
import ButtonGroup from "../../../../Global/ButtonGroup";
import "./style.scss";

export default function SongItem({ item, rank }) {
	const [hovering, setHovering] = useState(false);
	return (
		<Row
			gutter={[0, 20]}
			justify="space-between"
			align="middle"
			className={rank === 10 ? "" : "border-bottom"}
			onMouseEnter={() => setHovering(true)}
			onMouseLeave={() => setHovering(false)}
		>
			<Col span={19}>
				<Row gutter={10}>
					<Col>
						<Thumbnail width={50} height={50} src={item.album.cover_small} />
					</Col>
					<Col>
						<Link to={`/detail/${item.id}`} title={item.title}>
							{item.title.length > 25
								? item.title.slice(0, 25) + "..."
								: item.title}
						</Link>

						<div>{item.artist.name}</div>
					</Col>
				</Row>
			</Col>

			{hovering ? (
				<Col>
					<ButtonGroup />
				</Col>
			) : null}
		</Row>
	);
}
