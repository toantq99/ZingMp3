import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Row, Col } from "antd";
import Thumbnail from "../../Thumbnail";
import ButtonGroup from "../../ButtonGroup";
import "./style.scss";

export default function SongItem({ item, rank }) {
	const [hovering, setHovering] = useState(false);
	return (
		<Row
			gutter={[0, 20]}
			align="middle"
			justify="space-between"
			className={rank === 10 ? "" : "border-bottom"}
			onMouseEnter={() => setHovering(true)}
			onMouseLeave={() => setHovering(false)}
		>
			<Col span={18}>
				<Row gutter={10}>
					<Col>
						<Thumbnail width={50} height={50} item={item} />
					</Col>
					<Col>
						<div className="name-overflow">
							<Link to={`/bai-hat/${item.id}`} title={item.title}>
								{item.title_short}
							</Link>
						</div>

						<div>{item.artist.name}</div>
					</Col>
				</Row>
			</Col>
			<Col>{hovering ? <ButtonGroup item={item} /> : null}</Col>
		</Row>
	);
}
