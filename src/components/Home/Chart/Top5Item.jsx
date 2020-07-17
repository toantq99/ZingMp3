import React from "react";
import Thumbnail from "../../Static/Thumbnail";
import SongInfo from "../../Static/SongInfo";
import ButtonGroup from "../../Static/ButtonGroup";

export default function Top5Item({ id, item }) {
	return (
		<div
			className="d-flex justify-bw align-center"
			style={{
				padding: 10,
				borderBottom: id === 4 ? "none" : "1px solid gray",
			}}
		>
			<div className="d-flex align-center">
				<div
					className={
						"text-big " +
						(id === 0
							? "text-blue"
							: id === 1
							? "text-green"
							: id === 2
							? "text-red"
							: "text-gray")
					}
					style={{ marginRight: 10 }}
				>
					{id + 1}
				</div>
				<div style={{ textAlign: "center", width: 40, marginRight: 10 }}>
					{item.type > 0 ? (
						<div className="text-green">
							<span className="material-icons icon">expand_less</span>
							{item.type}
						</div>
					) : item.type < 0 ? (
						<div className="text-red">
							<span className="material-icons icon">expand_more</span>
							{-item.type}
						</div>
					) : (
						<div className="text-gray">
							<span className="material-icons">horizontal_rule</span>
						</div>
					)}
				</div>
				<div className="d-flex align-center">
					<Thumbnail
						width={60}
						height={60}
						src="https://photo-resize-zmp3.zadn.vn/w94_r1x1_jpeg/cover/1/3/c/4/13c41aade59ccbc1d6a5819050ca8c65.jpg"
						marginRight={10}
					/>
					<SongInfo
						type="big"
						color="dark"
						name={item.name}
						singer={item.singer}
					/>
				</div>
			</div>

			<div>
				<ButtonGroup mv={item.mv} marginRight={30} />
				<span className="text-big">{item.count}</span>
			</div>
		</div>
	);
}
