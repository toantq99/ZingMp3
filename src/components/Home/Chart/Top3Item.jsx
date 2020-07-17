import React from "react";
import SongInfo from "../../Static/SongInfo";

export default function Top3Item({ id, item }) {
	return (
		<div
			style={{
				border: "1px solid gray",
				borderRadius: 3,
				width: 180,
				height: 35,
				padding: 5,
				fontSize: 14,
			}}
			className="d-flex text-light justify-bw align-center"
		>
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
					style={{
						border: "white 1px solid",
						borderRadius: 2,
						marginRight: 5,
					}}
					width={28}
					height={28}
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
	);
}
