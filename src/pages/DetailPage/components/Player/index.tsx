// Libs
import React from "react";
// Components
import PlayerImage from "@DetailPage/atoms/PlayerImage";
import PlayerInfo from "../PlayerInfo";
import CustomAudioPlayer from "../AudioPlayer";
// Types
import { SongInAlbum, SongDetail } from "@constants/types/songDetailTypes";
// Styles
import "react-h5-audio-player/lib/styles.css";
import "./style.scss";

interface Props {
	song: SongDetail | SongInAlbum;
	cover?: string;
	onListen?: any;
	onPlay?: any;
}

const Player: React.FC<Props> = ({
	song,
	cover,
	onListen,
	onPlay = () => {},
}) => {
	return (
		<div className="player-wrapper">
			<div className="player-header">
				<PlayerImage song={song} cover={cover} />
				<PlayerInfo song={song} />
			</div>
			<CustomAudioPlayer {...{ song, onListen, onPlay }} />
		</div>
	);
};

export default Player;
