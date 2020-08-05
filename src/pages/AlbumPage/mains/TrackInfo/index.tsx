import React from "react";
import { SongInAlbum } from "@constants/types/songDetailTypes";
import { AlbumDetail } from "@constants/types/albumTypes";
import TrackInfoAlbum from "@AlbumPage/components/TrackInfoAlbum";
import TrackInfoDate from "@AlbumPage/components/TrackInfoDate";

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
			<TrackInfoAlbum />
			<TrackInfoDate />
		</div>
	);
};

export default TrackInfo;
