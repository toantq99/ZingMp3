import React, { useEffect } from "react";
import { Track } from "@constants/DataTypes/TrackTypes";
import { Link } from "react-router-dom";
import "./style.scss";

interface Props {
	item: Track;
	index: number;
	setCurrentTrackIndex: React.Dispatch<React.SetStateAction<number>>;
	setCurrentTime: React.Dispatch<React.SetStateAction<number>>;
}

const TrackItemInfo: React.FC<Props> = ({
	item,
	index,
	setCurrentTime,
	setCurrentTrackIndex,
}) => {
	useEffect(() => {
		console.log("track item info", index);
	});
	return (
		<div
			className="track-item-info-wrapper"
			onClick={() => {
				setCurrentTrackIndex(index);
				setCurrentTime(0);
			}}
		>
			<Link to={`/bai-hat/${item.id}`} className="title">
				{item.title_short}
			</Link>
			<div>{(item.artist || {}).name}</div>
		</div>
	);
};

export default React.memo(TrackItemInfo);
