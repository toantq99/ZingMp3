//Libs
import React from "react";
//Types
import { AlbumDetail } from "@constants/types/albumTypes";

const TrackInfoAlbum: React.FC<{ album: AlbumDetail }> = ({ album }) => {
	return (
		<div className="track-info-album-wrapper">
			<span>Album: </span>
			<strong>{album.title}</strong>
		</div>
	);
};

export default TrackInfoAlbum;
