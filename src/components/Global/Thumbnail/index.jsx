import React, { useState } from "react";
import "./style.scss";

export default function Thumbnail({ width, height, marginRight, src }) {
	const [hover, setHover] = useState(false);
	return (
		<div
			className="thumbnail"
			onMouseEnter={() => setHover(true)}
			onMouseLeave={() => setHover(false)}
		>
			<img
				src={src ? src : `http://via.placeholder.com/${width}`}
				alt="thumbnail"
				width={width}
				height={height}
				style={{ marginRight: marginRight }}
			/>
			{hover ? (
				<button
					className="btn-icon btn-play"
					onMouseEnter={() => setHover(true)}
				>
					<span className="material-icons icon">play_circle_filled</span>
				</button>
			) : null}
		</div>
	);
}
