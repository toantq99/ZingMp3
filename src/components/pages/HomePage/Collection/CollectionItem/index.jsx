import React from "react";
import { Link } from "react-router-dom";
import Thumbnail from "../../../../Global/Thumbnail";
import "./style.scss";

export default function CollectionItem({ item, src, height, width }) {
	return (
		<div className="collection-item" title={item.name + " - " + item.singer}>
			<Link to="/">
				<Thumbnail item={item} width={width} height={height} src={src} />
				<div className="title">{item.name}</div>
				<small className="singer">{item.singer}</small>
			</Link>
		</div>
	);
}
