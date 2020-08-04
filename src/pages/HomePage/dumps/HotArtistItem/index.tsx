import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./style.scss";
import { Singer } from "@constants/types/songDetailTypes";

interface Props {
	width: number;
	height: number;
	item: Singer;
}

const HotArtistItem: React.FC<Props> = ({ width, height, item }) => {
	const [hovering, setHovering] = useState(false);
	return (
		<Link to="/">
			<div
				className="item"
				onMouseEnter={() => setHovering(true)}
				onMouseLeave={() => setHovering(false)}
			>
				<img
					src={item.picture_big}
					alt={item.name}
					width={width}
					height={height}
				/>
				{hovering ? <div>{item.name}</div> : null}
			</div>
		</Link>
	);
};

export default HotArtistItem;
