// Libs
import React from "react";
import { Link } from "react-router-dom";
// Types
import { TrackDetail } from "@constants/DataTypes/TrackTypes";
import { Album } from "@constants/DataTypes/AlbumTypes";
import { MainTypes } from "@constants/DataTypes/HomeTypes";

const WChartHeaderItemTitle: React.FC<{
	item: Album | TrackDetail;
	type: number;
}> = ({ item, type }) => {
	return (
		<Link
			to={item.type === "track" ? `/bai-hat/${item.id}` : `/album/${item.id}`}
		>
			{type === MainTypes.Track
				? (item as TrackDetail).title_short
				: (item as Album).title}
		</Link>
	);
};

export default WChartHeaderItemTitle;
