import React from "react";
import Thumbnail from "../../Static/Thumbnail";

export default function CollectionItem({ item, width, height }) {
	return (
		<div
			style={{
				padding: "2px 5px 20px 5px",
				display: "inline-block",
				flex: "1 1 " + width + "px",
			}}
		>
			<Thumbnail width={width} height={height} />
			<div style={{ maxWidth: width }}>{item.name}</div>
			<small className="text-gray">{item.singer}</small>
		</div>
	);
}
