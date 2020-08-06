// Libs
import React from "react";
import AudioPlayer from "react-h5-audio-player";
// Types
import { SongDetail, SongInAlbum } from "@constants/types/songDetailTypes";
// SCSS
import "./style.scss";

interface Props {
	song: SongDetail | SongInAlbum;
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
