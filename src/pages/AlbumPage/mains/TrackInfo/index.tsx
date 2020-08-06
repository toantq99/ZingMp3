// Libs
import React from "react";
// Components
import TrackInfoAlbum from "@AlbumPage/components/TrackInfoAlbum";
import TrackInfoDate from "@AlbumPage/components/TrackInfoDate";
//Types
import { SongInAlbum } from "@constants/types/songDetailTypes";
import { AlbumDetail } from "@constants/types/albumTypes";

interface Props {
	track: SongInAlbum;
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

export default TrackInfo;
