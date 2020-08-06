// Libs
import React from "react";
import { Link } from "react-router-dom";
// Components
import Thumbnail from "@GlobalComponents/mains/Thumbnail";
// Types
import { Album } from "@constants/types/albumTypes";
// SCSS
import "./style.scss";

interface Props {
	rank: number;
	item: Album;
}

const WChartItemAlbum: React.FC<Props> = ({ rank, item }) => {
	const fakeCount = Math.floor(Math.random() * 10000 + 10000);
	return (
		<div className="wchart-item-album-wrapper">
			<div className="thumbnail">
				<Thumbnail width={100} height={100} item={item} />
				<div className="rank">{rank < 10 ? "0" + rank : rank} </div>
			</div>
			<div className="info">
				<Link to={`/album/${item.id}`} className="title">
					{item.title}
				</Link>
				<div className="artist">{item.artist.name}</div>
				<div className="count">{fakeCount}</div>
			</div>
		</div>
	);
};
export default WChartItemAlbum;
