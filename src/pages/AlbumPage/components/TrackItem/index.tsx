// Libs
import React from "react";
import { Link } from "react-router-dom";
// Components
import TrackProgress from "../TrackProgress";
// Types
import { SongInAlbum } from "@constants/types/songDetailTypes";
// SCSS
import "./style.scss";
import ButtonGroupInline from "@GlobalComponents/mains/ButtonGroupInline";

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
			<div className="info">
				<Link to={`/bai-hat/${item.id}`}>{item.title_short}</Link>
				<div>{(item.artist || {}).name}</div>
			</div>
			{isPlaying ? (
				<TrackProgress currentTime={currentTime} duration={duration} />
			) : (
				<ButtonGroupInline item={item} />
			)}
		</div>
	);
};

export default TrackItem;
