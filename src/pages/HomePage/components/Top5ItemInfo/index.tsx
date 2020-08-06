// Libs
import React from "react";
import { Link } from "react-router-dom";
import { SongDetail } from "@constants/types/songDetailTypes";
// SCSS
import "./style.scss";

const Top5ItemInfo: React.FC<{ item: SongDetail }> = ({ item }) => {
	return (
		<div className="top5-item-info-wrapper">
			<Link
				to={`/bai-hat/${item.id}`}
				title={item.title + " - " + item.artist.name}
			>
				{item.title}
			</Link>
			<div>{item.artist.name}</div>
		</div>
	);
};
export default Top5ItemInfo;
