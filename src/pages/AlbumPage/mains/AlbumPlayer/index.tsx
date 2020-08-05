import Player from "@DetailPage/components/Player";
import React from "react";

const AlbumPlayer: React.FC<> = ({}) => (
	<Player
		song={currentTrack}
		cover={detail.cover}
		onListen={(e: any) => {
			setCurrentTime(e.target.currentTime);
			if (
				Math.floor(e.target.currentTime) === Math.floor(duration) &&
				currentTrackIndex < tracks.length - 1
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
