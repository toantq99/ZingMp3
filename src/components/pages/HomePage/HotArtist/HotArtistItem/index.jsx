import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./style.scss";

export default function HotArtistItem({ width, height, item }) {
	const [hovering, setHovering] = useState(false);
	return (
		<Link to="/">
			<div
				className="item"
				onMouseEnter={() => setHovering(true)}
				onMouseLeave={() => setHovering(false)}
			>
				<img
					src="https://photo-resize-zmp3.zadn.vn/w240_r1x1_jpeg/avatars/c/f/b/f/cfbfd373b7cf83c5539c2387c009229d.jpg#home_hotartist_04"
					alt={item.name}
					width={width}
					height={height}
				/>
				{hovering ? <div>{item.name}</div> : null}
			</div>
		</Link>
	);
}
