import React from "react";
import { Link } from "react-router-dom";
import Thumbnail from "@GlobalComponents/Thumbnail";
import "./style.scss";

export default function CollectionItem({ item, height, width }) {
	return (
		<div
			className="collection-item"
			title={item.title + " - " + item.artist.name}
		>
			<Link to={`/bai-hat/${item.id}`}>
				<Thumbnail item={item} width={width} height={height} />
				<div className="title">{item.title}</div>
				<small className="singer">{item.artist.name}</small>
			</Link>
		</div>
	);
}
