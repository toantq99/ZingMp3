// Libs
import React from "react";
// Components
import TrackProgress from "../TrackProgress";
// Types
import { Track } from "@constants/DataTypes/TrackTypes";
// SCSS
import "./style.scss";
import TrackItemInfo from "../TrackItemInfo";

interface Props {
	item: Track;
	index: number;
	duration: number;
	currentTime: number;
	setCurrentTrackIndex: React.Dispatch<React.SetStateAction<number>>;
	setCurrentTime: React.Dispatch<React.SetStateAction<number>>;
}

const TrackItemCurrent: React.FC<Props> = ({
	item,
	setCurrentTrackIndex,
	setCurrentTime,
	index,
	currentTime,
	duration,
}) => {
	return (
		<div className="track-item-wrapper">
			<TrackItemInfo
				{...{ item, setCurrentTrackIndex, setCurrentTime, index }}
			/>
			<TrackProgress currentTime={currentTime} duration={duration} />
		</div>
	);
};

export default TrackItemCurrent;
