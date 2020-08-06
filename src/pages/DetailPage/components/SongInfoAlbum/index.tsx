// Libs
import React from "react";
import { Link } from "react-router-dom";
// Types
import { SongDetail } from "@constants/types/songDetailTypes";

const SongInfoAlbum: React.FC<{ song: SongDetail }> = ({ song }) => {
	return (
		<div className="song-info-album-wrapper">
			<span>
				Album: <Link to={`/album/${song.album.id}`}>{song.album.title}</Link>
			</span>
		</div>
	);
};

export default SongInfoAlbum;
