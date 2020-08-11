// Libs
import React from "react";
// Types
import { TrackDetail } from "@constants/DataTypes/TrackTypes";
// SCSS
import "./style.scss";

const Top3ItemInfo: React.FC<{ item: TrackDetail }> = ({ item }) => {
	return (
		<div className="top3-item-info-wrapper">
			<img src={item.album.cover_small} alt="singer img" />
			<div className="info">
				<div className="title">{item.title_short}</div>
				<small
					className="artist
				"
				>
					{item.artist.name}
				</small>
			</div>
		</div>
	);
};

export default Top3ItemInfo;
