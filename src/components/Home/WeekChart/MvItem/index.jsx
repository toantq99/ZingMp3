import React from "react";
import SongInfo from "../../../Global/SongInfo";
import Thumbnail from "../../../Global/Thumbnail";
import "./style.scss";

export default function MvItem({ hasBorder, rank, item, color, type }) {
	return (
		<div
			className="mv-item"
			style={{
				borderBottom: hasBorder ? "1px solid  gray" : "none",
			}}
		>
			<div className="p-relative">
				<Thumbnail
					width={110}
					height={type === "album" ? 110 : 60}
					src="https://photo-resize-zmp3.zadn.vn/w240_r16x9_jpeg/thumb_video/f/9/6/f/f96f21106a5dc67baa8bd5f06e8e97fc.jpg"
				/>
				<span className="mv-info">{rank}</span>
			</div>
			<div
				className="text-dark d-flex justify-bw"
				style={{ flexDirection: "column" }}
			>
				<SongInfo
					type="big"
					marginLeft={15}
					name={item.name}
					singer={item.singer}
					color={color === "light" ? "light" : "dark"}
					subcolor={color}
				/>
				<small
					className={color === "light" ? "text-light" : "text-gray"}
					style={{ marginLeft: 15 }}
				>
					{item.count}
				</small>
			</div>
		</div>
	);
}
