// Libs
import React from "react";
// Components
import SongInfoAlbum from "../SongInfoAlbum";
import SongInfoDate from "../SongInfoDate";
// Types
import { TrackDetail } from "@constants/DataTypes/TrackTypes";

interface Props {
	song: TrackDetail;
}

const SongInfo: React.FC<Props> = ({ song }) => {
	return (
		<div className="song-info-wrapper">
			<h2>
				{song.title} - {song.artist.name}
			</h2>
			<SongInfoAlbum song={song} />
			<SongInfoDate song={song} />
		</div>
	);
};

export default SongInfo;
