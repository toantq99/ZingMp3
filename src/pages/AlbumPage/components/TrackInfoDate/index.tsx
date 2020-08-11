// Libs
import React from "react";

// Types
import { AlbumDetail } from "@constants/DataTypes/AlbumTypes";

const TrackInfoDate: React.FC<{ album: AlbumDetail }> = ({ album }) => {
	return (
		<div className="track-info-date-wrapper">
			<span>Release Date: </span>
			<strong>{album.release_date}</strong>
		</div>
	);
};

export default TrackInfoDate;
