// Libs
import React, { useState } from "react";
// Types
import { Singer } from "@constants/types/songDetailTypes";
// SCSS
import "./style.scss";

interface Props {
	width: number;
	height: number;
	item: Singer;
	area: string;
}

const HotArtistItem: React.FC<Props> = ({ width, height, item, area }) => {
	const [hovering, setHovering] = useState(false);
	return (
		<div
			className="hot-artist-item-wrapper"
			style={{ gridArea: area }}
			onMouseEnter={() => setHovering(true)}
			onMouseLeave={() => setHovering(false)}
		>
			<img
				src={item.picture_big}
				alt={item.name}
				width={width}
				height={height}
			/>
			{hovering ? <div className="artist">{item.name}</div> : null}
		</div>
	);
};

export default HotArtistItem;
