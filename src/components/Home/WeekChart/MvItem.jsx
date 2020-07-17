import React from "react";
import SongInfo from "../../Static/SongInfo";
import Thumbnail from "../../Static/Thumbnail";

export default function MvItem({ hasBorder, rank, item, color, type }) {
	return (
		<div
			className="d-flex"
			style={{
				padding: "15px 0px",
				borderBottom: hasBorder ? "1px solid  gray" : "none",
				borderWidth: "thin",
				alignItems: "end",
			}}
		>
			<div className="p-relative">
				<Thumbnail
					width={110}
					height={type === "album" ? 110 : 60}
					marginRight={15}
					src="https://photo-resize-zmp3.zadn.vn/w240_r16x9_jpeg/thumb_video/f/9/6/f/f96f21106a5dc67baa8bd5f06e8e97fc.jpg"
				/>
				<span
					style={{
						fontSize: 20,
						position: "absolute",
						left: 5,
						bottom: 5,
					}}
					className="text-light"
				>
					{rank}
				</span>
			</div>
			<div
				className="text-dark d-flex justify-bw"
				style={{ flexDirection: "column" }}
			>
				<SongInfo
					type="big"
					name={item.name}
					singer={item.singer}
					color={color === "light" ? "light" : "dark"}
					subcolor={color}
				/>
				<small className={color === "light" ? "text-light" : "text-gray"}>
					{item.count}
				</small>
			</div>
		</div>
	);
}
