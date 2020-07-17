import React, { useState } from "react";

export default function HotArtistItem({ width, height, item }) {
	const [hovering, setHovering] = useState(false);
	return (
		<div className="p-relative">
			<img
				src={`http://via.placeholder.com/${width}`}
				alt={item.name}
				width={width}
				height={height}
				style={{ flex: "1 1 " + width + "px", height: "100%" }}
				onMouseEnter={() => setHovering(true)}
				onMouseLeave={() => setHovering(false)}
			/>
			<span
				className="p-absolute text-cap text-small"
				style={{
					top: "50%",
					left: "50%",
					transform: "translate(-50%, -50%)",
					display: hovering ? "block" : "none",
				}}
				onMouseEnter={() => setHovering(true)}
			>
				{item.name}
			</span>
		</div>
	);
}
