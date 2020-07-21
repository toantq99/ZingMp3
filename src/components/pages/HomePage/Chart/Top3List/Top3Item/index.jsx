import React from "react";
import "./style.scss";

export default function Top3Item({ rank, item }) {
	return (
		<div className="top3-item">
			<div className={`rank-${rank}`}>{"0" + rank}</div>
			<img
				src="https://photo-resize-zmp3.zadn.vn/w240_r1x1_jpeg/avatars/f/5/7/5/f575aceb08b8defbc81e0baafd7bd5d8.jpg"
				alt="singer img"
				className="top3-img"
			/>
			<div>
				<div>{item.name}</div>
				<small>{item.singer}</small>
			</div>

			<div className={`rank-${rank}`}>{item.percent + "%"}</div>
		</div>
	);
}
