// Libs
import React from "react";
// Components
import TrackInfoAlbum from "@AlbumPage/components/TrackInfoAlbum";
import TrackInfoDate from "@AlbumPage/components/TrackInfoDate";
//Types
import { Track } from "@constants/DataTypes/TrackTypes";
import { AlbumDetail } from "@constants/DataTypes/AlbumTypes";

interface Props {
	track: Track;
	album: AlbumDetail;
}

const TrackInfo: React.FC<Props> = ({ track, album }) => {
	return (
		<div className="track-info-wrapper">
			<h2>
				{track.title} - {track.artist.name}
			</h2>
			<TrackInfoAlbum album={album} />
			<TrackInfoDate album={album} />
		</div>
	);
};

export default React.memo(TrackInfo);
