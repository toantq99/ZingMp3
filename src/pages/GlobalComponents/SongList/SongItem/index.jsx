import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Row, Col } from "antd";
import Thumbnail from "@GlobalComponents/Thumbnail";
import ButtonGroup from "@GlobalComponents/ButtonGroup";
import "./style.scss";

export default function SongItem({ item, rank, size }) {
	const [hovering, setHovering] = useState(false);
	return (
		<Row
			gutter={[0, 20]}
			align="middle"
			justify="space-between"
			className="border-bottom"
			onMouseEnter={() => setHovering(true)}
			onMouseLeave={() => setHovering(false)}
		>
			<Col span={18}>
				<Row gutter={10} align="middle">
					<Col>
						<Thumbnail
							width={size ? 90 : 50}
							height={size ? 90 : 50}
							item={item}
						/>
					</Col>
					<Col>
						<div className={size ? "large-title" : "small-title"}>
							<Link to={`/bai-hat/${item.id}`} title={item.title}>
								{item.title_short}
							</Link>
						</div>

						<div className={size ? "large-singer" : "small-singer"}>
							{item.artist.name}
						</div>
					</Col>
				</Row>
			</Col>
			<Col>{hovering ? <ButtonGroup item={item} size={size} /> : null}</Col>
		</Row>
	);
}
