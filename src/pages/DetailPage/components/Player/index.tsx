import React from "react";
import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";
import "./style.scss";
import { SongInAlbum, SongDetail } from "@constants/types/songDetailTypes";
import { PlayerImage } from "@pages/DetailPage/atoms/PlayerImage";
import PlayerInfo from "@pages/DetailPage/atoms/PlayerInfo";

interface Props {
	song: SongInAlbum | SongDetail;
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
			<PlayerImage />
			<PlayerInfo />
			<AudioPlayer
				autoPlay
				src={song.preview}
				onListen={onListen}
				onPlay={(e: any) => {
					onPlay(e);
					e.target.onloadedmetadata = onPlay;
				}}
				className="audio-player"
			/>
		</div>
	);
};

export default Player;
