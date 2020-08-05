import React from "react";
import { Link } from "react-router-dom";
import { Album } from "@constants/types/albumTypes";
import "./style.scss";
import Thumbnail from "@GlobalComponents/mains/Thumbnail";

interface Props {
	rank: number;
	item: Album;
}

const WChartItemAlbum: React.FC<Props> = ({ rank, item }) => {
	const fakeCount = Math.floor(Math.random() * 10000 + 10000);
	return (
		<div className="wchart-item-album-wrapper">
			<Thumbnail width={110} height={110} item={item} />
			<span className="album-rank">{rank < 10 ? "0" + rank : rank} </span>
			<Link to={`/album/${item.id}`}>{item.title}</Link>
			<div>{item.artist.name}</div>
			<div>{fakeCount}</div>
		</div>
	);
};
export default WChartItemAlbum;
