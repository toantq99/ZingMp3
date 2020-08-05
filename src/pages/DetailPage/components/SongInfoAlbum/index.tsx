import React from "react";
import { Link } from "react-router-dom";

const SongInfoAlbum = () => {
	return (
		<div className="song-info-album-wrapper">
			<span>Album: </span>
			<span>
				<Link to={`/album/${song.album.id}`}>{song.album.title}</Link>
			</span>
		</div>
	);
};

export default SongInfoAlbum;
