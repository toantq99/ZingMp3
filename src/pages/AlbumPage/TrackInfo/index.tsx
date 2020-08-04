import React from "react";
import { SongInAlbum } from "@constants/types/songDetailTypes";
import { AlbumDetail } from "@constants/types/albumTypes";

interface Props {
	track: SongInAlbum;
	album: AlbumDetail;
}

const TrackInfo: React.FC<Props> = ({ track, album }) => {
	return (
		<div className="album-info-wrapper">
			<h2>
				{track.title} - {track.artist.name}
			</h2>
			<div className="info">
				<span>Album: </span>
				<strong>{album.title}</strong>
			</div>
			<div className="info">
				<span>Release Date: </span>
				<strong>{album.release_date}</strong>
			</div>
		</div>
	);
};

export default TrackInfo;
