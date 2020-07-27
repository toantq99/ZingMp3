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
				<img src={item.image} alt={item.name} width={width} height={height} />
				{hovering ? <div>{item.name}</div> : null}
			</div>
		</Link>
	);
}
