import React from "react";
import { SongDetail } from "@constants/types/songDetailTypes";
import SongInfoAlbum from "../SongInfoAlbum";
import SongInfoDate from "../SongInfoDate";

interface Props {
	song: SongDetail;
}

const SongInfo: React.FC<Props> = ({ song }) => {
	return (
		<div className="song-info-wrapper">
			<h2>
				{song.title} - {song.artist.name}
			</h2>
			<SongInfoAlbum />
			<SongInfoDate />
		</div>
	);
};

export default SongInfo;
