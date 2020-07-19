import React, { useState } from "react";
import Thumbnail from "../../../Global/Thumbnail";
import SongInfo from "../../../Global/SongInfo";
import ButtonGroup from "../../../Global/ButtonGroup";
import "./style.scss";

export default function SongItem({ item, id, src }) {
	const [hovering, setHovering] = useState(false);
	return (
		<div
			className="song-list-item"
			style={{
				borderBottom: id === 9 ? "" : "1px solid gray",
			}}
			onMouseEnter={() => setHovering(true)}
			onMouseLeave={() => setHovering(false)}
		>
			<div className="d-flex align-center">
				<Thumbnail width={50} height={50} src={src} />
				<SongInfo
					type="big"
					color="dark"
					marginLeft={10}
					name={item.name}
					singer={item.singer}
				/>
			</div>
			<div style={{ display: hovering ? "block" : "none" }}>
				<ButtonGroup type="small" />
			</div>
		</div>
	);
}
