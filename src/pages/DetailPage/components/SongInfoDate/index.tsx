// Libs
import React from "react";
// Types
import { TrackDetail } from "@constants/DataTypes/TrackTypes";

const SongInfoDate: React.FC<{ song: TrackDetail }> = ({ song }) => {
	return (
		<div className="song-info-date-wrapper">
			<span>Release Date: </span>
			<span>{song.release_date}</span>
		</div>
	);
};

export default SongInfoDate;
