// Libs
import React from "react";
// Types
import { SongDetail, SongInAlbum } from "@constants/types/songDetailTypes";
// SCSS
import "./style.scss";

interface Props {
	song: SongDetail | SongInAlbum;
	cover?: string;
}

const PlayerImage: React.FC<Props> = ({ song, cover }) => {
	return (
		<img
			src={
				(song as SongDetail).album ? (song as SongDetail).album.cover : cover
			}
			alt="song cover"
			className="player-image"
		/>
	);
};

export default PlayerImage;
