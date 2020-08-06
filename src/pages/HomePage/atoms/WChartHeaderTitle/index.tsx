// Libs
import React from "react";
import { Link } from "react-router-dom";
// Types
import { SongDetail } from "@constants/types/songDetailTypes";
import { Album } from "@constants/types/albumTypes";
import { WeekChartType } from "@constants/types/homeTypes";

const WChartHeaderItemTitle: React.FC<{
	item: Album | SongDetail;
	type: number;
}> = ({ item, type }) => {
	return (
		<Link
			to={item.type === "track" ? `/bai-hat/${item.id}` : `/album/${item.id}`}
		>
			{type === WeekChartType.Track
				? (item as SongDetail).title_short
				: (item as Album).title}
		</Link>
	);
};

export default WChartHeaderItemTitle;
