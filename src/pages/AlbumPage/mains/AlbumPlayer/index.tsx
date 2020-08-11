// Libs
import React from "react";
// Components
import Player from "@DetailPage/components/Player";
// Types
import { Track } from "@constants/DataTypes/TrackTypes";
import { AlbumDetail } from "@constants/DataTypes/AlbumTypes";

interface Props {
	duration: number;
	setDuration: React.Dispatch<React.SetStateAction<number>>;
	currentTrackIndex: number;
	setCurrentTrackIndex: React.Dispatch<React.SetStateAction<number>>;
	setCurrentTime: React.Dispatch<React.SetStateAction<number>>;
	album: AlbumDetail;
	maxLength: number;
	currentTrack: Track;
}

const AlbumPlayer: React.FC<Props> = ({
	duration,
	setDuration,
	currentTrackIndex,
	setCurrentTrackIndex,
	setCurrentTime,
	album,
	maxLength,
	currentTrack,
}) => (
	<Player
		song={currentTrack}
		cover={album.cover}
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
