import React, { useState } from "react";
import { PlayCircleOutlined } from "@ant-design/icons";
import "./style.scss";

export default function Thumbnail({ width, height, src }) {
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
			/>
			{hover ? (
				<button className="btn-play" onMouseEnter={() => setHover(true)}>
					<PlayCircleOutlined />
				</button>
			) : null}
		</div>
	);
}
