import React from "react";
import Thumbnail from "../../../../GlobalComponents/Thumbnail";
import { Link } from "react-router-dom";
import { Row, Col } from "antd";
import { Album } from "../../../../../constants/types/albumTypes";
import "./style.scss";

interface Props {
	rank: number;
	item: Album;
}

const AlbumItem: React.FC<Props> = ({ rank, item }) => {
	const fakeCount = Math.floor(Math.random() * 10000 + 10000);
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
};
export default AlbumItem;
