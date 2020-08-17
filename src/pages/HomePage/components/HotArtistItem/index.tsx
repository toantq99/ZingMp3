// Libs
import React, { useState } from "react";
// Types
import { Artist } from "@constants/DataTypes/TrackTypes";
// SCSS
import "./style.scss";

interface Props {
	width: number;
	height: number;
	item: Artist;
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
				loading="lazy"
			/>
			{hovering ? <div className="artist">{item.name}</div> : null}
		</div>
	);
};

export default HotArtistItem;
