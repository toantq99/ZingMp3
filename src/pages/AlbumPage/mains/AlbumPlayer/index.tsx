// Libs
import React from "react";
// Components
import Player from "@DetailPage/components/Player";
// Types
import { SongInAlbum } from "@constants/types/songDetailTypes";
import { AlbumDetail } from "@constants/types/albumTypes";

interface Props {
	duration: number;
	setDuration: React.Dispatch<React.SetStateAction<number>>;
	currentTrackIndex: number;
	setCurrentTrackIndex: React.Dispatch<React.SetStateAction<number>>;
	setCurrentTime: React.Dispatch<React.SetStateAction<number>>;
	detail: AlbumDetail;
	maxLength: number;
	currentTrack: SongInAlbum;
}

const AlbumPlayer: React.FC<Props> = ({
	duration,
	setDuration,
	currentTrackIndex,
	setCurrentTrackIndex,
	setCurrentTime,
	detail,
	maxLength,
	currentTrack,
}) => (
	<Player
		song={currentTrack}
		cover={detail.cover}
		onListen={(e: any) => {
			setCurrentTime(e.target.currentTime);
			if (
				Math.floor(e.target.currentTime) === Math.floor(duration) &&
				currentTrackIndex < maxLength - 1
			) {
				setCurrentTrackIndex(currentTrackIndex + 1);
				setCurrentTime(0);
			}
		}}
		onPlay={(e: any) => {
			setDuration(e.target.duration);
		}}
	/>
);

export default AlbumPlayer;
