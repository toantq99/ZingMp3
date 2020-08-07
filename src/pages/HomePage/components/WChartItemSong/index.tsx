// Libs
import React, { useState } from "react";
import { Link } from "react-router-dom";
// Components
import ButtonGroupInline from "@GlobalComponents/mains/ButtonGroupInline";
// Types
import { SongDetail } from "@constants/types/songDetailTypes";
// SCSS
import "./style.scss";

interface Props {
	rank: number;
	item: SongDetail;
}

const WChartItemSong: React.FC<Props> = ({ rank, item }) => {
	const fakeCount = Math.floor(Math.random() * 10000 + 10000);
	const [hovering, setHovering] = useState(false);
	return (
		<div
			className="wchart-item-song-wrapper"
			onMouseEnter={() => setHovering(true)}
			onMouseLeave={() => setHovering(false)}
		>
			<div className="rank">{rank < 10 ? "0" + rank : rank}</div>
			<div className="info">
				<Link to={`/bai-hat/${item.id}`}>{item.title_short}</Link>
				<div>{item.artist.name}</div>
			</div>
			<div className="count">
				{hovering ? (
					<ButtonGroupInline item={item} />
				) : (
					<span>{fakeCount}</span>
				)}
			</div>
		</div>
	);
};

export default WChartItemSong;
