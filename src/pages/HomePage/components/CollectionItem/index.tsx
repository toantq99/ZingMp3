import React from "react";
import { Link } from "react-router-dom";
import "./style.scss";
import { SongDetail } from "@constants/types/songDetailTypes";
import Thumbnail from "@GlobalComponents/mains/Thumbnail";

interface Props {
	item: SongDetail;
	height: number;
	width: number;
}

const CollectionItem: React.FC<Props> = ({ item, height, width }) => {
	return (
		<div
			className="collection-item-wrapper"
			title={item.title + " - " + item.artist.name}
		>
			<Thumbnail item={item} width={width} height={height} />
			<Link to={`/bai-hat/${item.id}`} className="title">
				{item.title}
			</Link>
			<div className="singer">{item.artist.name}</div>
		</div>
	);
};

export default CollectionItem;
