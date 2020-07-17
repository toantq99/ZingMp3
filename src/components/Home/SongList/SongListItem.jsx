import React, { useState } from "react";
import Thumbnail from "../../Static/Thumbnail";
import SongInfo from "../../Static/SongInfo";
import ButtonGroup from "../../Static/ButtonGroup";

export default function SongListItem({ item, key }) {
	const [hovering, setHovering] = useState(false);
	return (
		<div
			className="d-flex align-center justify-bw"
			style={{
				margin: "5px 0",
				padding: "5px 0",
				borderBottom: key === 9 ? "" : "1px solid gray",
			}}
			onMouseEnter={() => setHovering(true)}
			onMouseLeave={() => setHovering(false)}
		>
			<div className="d-flex align-center">
				<Thumbnail width={50} height={50} marginRight={10} />
				<SongInfo
					type="big"
					color="dark"
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
