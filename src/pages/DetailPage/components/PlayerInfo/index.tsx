// Libs
import React from "react";
// Types
import { Track } from "@constants/DataTypes/TrackTypes";
// SCSS
import "./style.scss";

const PlayerInfo: React.FC<{ song: Track }> = ({ song }) => {
	return (
		<div className="player-info-wrapper">
			<h2 className="title">{song.title}</h2>
			<h4 className="artist">{song.artist ? song.artist.name : null}</h4>
		</div>
	);
};

export default PlayerInfo;
