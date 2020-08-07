// Libs
import React from "react";
// Types
import { SongDetail } from "@constants/types/songDetailTypes";

const SongInfoDate: React.FC<{ song: SongDetail }> = ({ song }) => {
	return (
		<div className="song-info-date-wrapper">
			<span>Release Date: </span>
			<span>{song.release_date}</span>
		</div>
	);
};

export default SongInfoDate;
