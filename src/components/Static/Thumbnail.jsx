import React from "react";

export default function Thumbnail({ width, height, marginRight, src }) {
	return (
		<div className="thumbnail">
			<img
				src={src ? src : `http://via.placeholder.com/${width}`}
				alt="thumbnail"
				width={width}
				height={height}
				style={{ marginRight: marginRight }}
			/>
			{/* <button className="btn-icon btn-play">
				<span className="material-icons icon">play_circle_filled</span>
			</button> */}
		</div>
	);
}
