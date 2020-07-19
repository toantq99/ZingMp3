import React from "react";
import { Link } from "react-router-dom";
import "./style.scss";

export default function Top3Item({ id, item }) {
	return (
		<Link to="/">
			<div className="chart-top3-item">
				<div
					className={
						id === 0 ? "text-blue" : id === 1 ? "text-green" : "text-red"
					}
				>
					{"0" + (id + 1)}
				</div>
				<div className="top3-item-middle">
					<img
						src="https://photo-resize-zmp3.zadn.vn/w240_r1x1_jpeg/avatars/f/5/7/5/f575aceb08b8defbc81e0baafd7bd5d8.jpg"
						alt="singer img"
						className="chart-top3-img"
					/>
					<div className="top3-item-info">
						<span className="text-cap">{item.name}</span>
						<small className="text-small text-gray">{item.singer}</small>
					</div>
				</div>
				<div
					className={
						id === 0 ? "text-blue" : id === 1 ? "text-green" : "text-red"
					}
				>
					{item.percent + "%"}
				</div>
			</div>
		</Link>
	);
}
