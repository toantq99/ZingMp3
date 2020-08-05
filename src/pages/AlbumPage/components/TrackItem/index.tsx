import React from "react";
import { Link } from "react-router-dom";
import "./style.scss";
import { SongInAlbum } from "@constants/types/songDetailTypes";
import TrackProgress from "../TrackProgress";

interface Props {
	item: SongInAlbum;
	index: number;
	isPlaying: boolean;
	duration: number;
	currentTime: number;
	setCurrentTrackIndex: React.Dispatch<React.SetStateAction<number>>;
	setCurrentTime: React.Dispatch<React.SetStateAction<number>>;
}

const TrackItem: React.FC<Props> = ({
	item,
	isPlaying,
	setCurrentTrackIndex,
	setCurrentTime,
	index,
	currentTime,
	duration,
}) => {
	return (
		<div
			className="track-item-wrapper"
			onClick={() => {
				setCurrentTrackIndex(index);
				setCurrentTime(0);
			}}
		>
			<Link to={`/bai-hat/${item.id}`}>{item.title_short}</Link>
			<div>{(item.artist || {}).name}</div>
			{isPlaying ? <TrackProgress /> : null}
		</div>
	);
};

export default TrackItem;
