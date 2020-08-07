// Libs
import React from "react";
import { Link } from "react-router-dom";
// Types
import { SongDetail } from "@constants/types/songDetailTypes";
// Utils
import { formarDuration } from "@GlobalComponents/utils";
// SCSS
import "./style.scss";

const SongItemInfo: React.FC<{ item: SongDetail; size?: string }> = ({
	item,
	size,
}) => {
	return (
		<div className="song-item-info-wrapper">
			<div className="title">
				<Link to={`/bai-hat/${item.id}`} title={item.title}>
					{item.title_short}
				</Link>
			</div>
			<div className="artist">{item.artist.name}</div>
			{size === "large" ? (
				<div>Thời lượng: {formarDuration(item.duration)}</div>
			) : null}
		</div>
	);
};
export default SongItemInfo;
