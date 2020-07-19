import React from "react";
import MusicItem from "../MusicItem";
import "./style.scss";

export default function Header({ type }) {
	return (
		<div>
			<div>
				<button className="wchart-header wchart-header-active">Việt Nam</button>
				<button className="wchart-header">US-UK</button>
				<button className="wchart-header">K-Pop</button>
			</div>
			<div className="p-relative">
				<img
					src="https://photo-zmp3.zadn.vn/banner/1/2/8/f/128fba5cb8c0adea6f79e4de403e96d5.jpg"
					alt="cover"
					className="wchart-header-img"
				/>
				<div className="wchart-header-item">
					<MusicItem
						rank="01"
						item={{
							name: "Cho anh say",
							singer: "Phan Duy Anh, ACV",
							count: "1,883",
						}}
						color="light"
						hasHover={!type}
					/>
				</div>
			</div>
		</div>
	);
}
