import React, { useState } from "react";
import { Link } from "react-router-dom";
import ButtonGroupInline from "@GlobalComponents/mains/ButtonGroupInline";
import "./style.scss";
import { SongDetail } from "@constants/types/songDetailTypes";

interface Props {
	rank: number;
	item: SongDetail;
}

const WChartItemSong: React.FC<Props> = ({ rank, item }) => {
	const fakeCount = Math.floor(Math.random() * 10000 + 10000);
	const [hovering, setHovering] = useState(false);
	return (
		<div
			className="wchart-item-song"
			onMouseEnter={() => setHovering(true)}
			onMouseLeave={() => setHovering(false)}
		>
			<div>{rank < 10 ? "0" + rank : rank}</div>
			<div className="title">
				<Link to={`/bai-hat/${item.id}`}>{item.title_short}</Link>
			</div>
			<div>{item.artist.name}</div>
			{hovering ? <ButtonGroupInline item={item} /> : <span>{fakeCount}</span>}
		</div>
	);
};

export default WChartItemSong;
