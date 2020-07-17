import React from "react";
import { Link } from "react-router-dom";
import SongInfo from "../../Static/SongInfo";

export default function Top3Item({ id, item }) {
	return (
		<Link to="/">
			<div className="d-flex text-light justify-bw align-center chart-top3-item">
				<div
					className={
						id === 0 ? "text-blue" : id === 1 ? "text-green" : "text-red"
					}
				>
					{"0" + (id + 1)}
				</div>
				<div className="d-flex align-center">
					<img
						src="https://photo-resize-zmp3.zadn.vn/w240_r1x1_jpeg/avatars/f/5/7/5/f575aceb08b8defbc81e0baafd7bd5d8.jpg"
						alt="singer img"
						className="chart-top3-img"
					/>
					<SongInfo
						type="small"
						color="white"
						name={item.name}
						singer={item.singer}
					/>
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
