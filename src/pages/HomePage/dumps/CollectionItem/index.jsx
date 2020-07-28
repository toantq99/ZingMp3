import React from "react";
import { Link } from "react-router-dom";
import Thumbnail from "@GlobalComponents/Thumbnail";
import "./style.scss";

export default function CollectionItem({ item, height, width }) {
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
}
