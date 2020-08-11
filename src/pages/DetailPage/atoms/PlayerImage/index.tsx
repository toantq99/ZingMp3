// Libs
import React from "react";
// Types
import { Track, TrackDetail } from "@constants/DataTypes/TrackTypes";
// SCSS
import "./style.scss";

interface Props {
	song: Track;
	cover?: string;
}

const PlayerImage: React.FC<Props> = ({ song, cover }) => {
	return (
		<img
			src={
				(song as TrackDetail).album ? (song as TrackDetail).album.cover : cover
			}
			alt="song cover"
			className="player-image"
		/>
	);
};

export default PlayerImage;
