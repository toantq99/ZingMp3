import React from "react";
import TrackItem from "./TrackItem";
import { SongInAlbum } from "@constants/types/songDetailTypes";

interface Props {
	list: SongInAlbum[];
	currentTrackIndex: number;
	currentTime: number;
	duration: number;
	setCurrentTrackIndex: React.Dispatch<React.SetStateAction<number>>;
	setCurrentTime: React.Dispatch<React.SetStateAction<number>>;
}

const TrackList: React.FC<Props> = ({
	list,
	currentTrackIndex,
	setCurrentTrackIndex,
	setCurrentTime,
	currentTime,
	duration,
}) => {
	return (
		<div className="track-list-wrapper">
			<h2 className="text-upper">Tiếp theo</h2>

			{list.map((item, id) => (
				<TrackItem
					item={item}
					index={id}
					key={id}
					setCurrentTrackIndex={setCurrentTrackIndex}
					setCurrentTime={setCurrentTime}
					isPlaying={id === currentTrackIndex}
					currentTime={currentTime}
					duration={duration}
				/>
			))}
		</div>
	);
};

export default TrackList;
