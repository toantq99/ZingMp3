// Libs
import React from "react";
import AudioPlayer from "react-h5-audio-player";
// Types
import { Track } from "@constants/DataTypes/TrackTypes";
// SCSS
import "./style.scss";

interface Props {
	song: Track;
	onListen: any;
	onPlay: any;
}

const CustomAudioPlayer: React.FC<Props> = ({ song, onListen, onPlay }) => {
	return (
		<AudioPlayer
			autoPlay
			src={song.preview}
			onListen={onListen}
			onPlay={(e: any) => {
				onPlay(e);
				e.target.onloadedmetadata = onPlay;
			}}
			loop
			className="audio-player-wrapper"
		/>
	);
};

export default CustomAudioPlayer;
