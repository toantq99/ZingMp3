import React from "react";

export default function Thumbnail({ width, height, marginRight, src }) {
	return (
		<img
			src={src ? src : `http://via.placeholder.com/${width}`}
			alt="thumbnail"
			width={width}
			height={height}
			className="thumbnail"
			style={{ marginRight: marginRight }}
		/>
	);
}
