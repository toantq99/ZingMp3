import React from "react";
import TrackItem from "./TrackItem";

export default function TrackList({
	list,
	currentTrackIndex,
	setCurrentTrackIndex,
	setCurrentTime,
	currentTime,
	duration,
}) {
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
}
