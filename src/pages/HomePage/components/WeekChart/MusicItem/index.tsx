import React, { useState } from "react";
import { Row, Col } from "antd";
import { Link } from "react-router-dom";
import ButtonGroup from "../../../../GlobalComponents/ButtonGroup";
import "./style.scss";
import { SongDetail } from "../../../../../constants/types/songDetailTypes";

interface Props {
	rank: number;
	item: SongDetail;
}

const MusicItem: React.FC<Props> = ({ rank, item }) => {
	const fakeCount = Math.floor(Math.random() * 10000 + 10000);
	const [hovering, setHovering] = useState(false);
	return (
		<Row
			align="middle"
			justify="space-between"
			className={"music-item"}
			onMouseEnter={() => setHovering(true)}
			onMouseLeave={() => setHovering(false)}
		>
			<Col>
				<Row gutter={10} align="middle">
					<Col>{rank < 10 ? "0" + rank : rank} </Col>
					<Col>
						<div className="title">
							<Link to={`/bai-hat/${item.id}`}>{item.title_short}</Link>
						</div>
						<div>{item.artist.name}</div>
					</Col>
				</Row>
			</Col>
			{hovering ? <ButtonGroup item={item} /> : <span>{fakeCount}</span>}
		</Row>
	);
};

export default MusicItem;
