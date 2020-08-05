import React from "react";
import { SongDetail } from "@constants/types/songDetailTypes";
import { Album } from "@constants/types/albumTypes";
import { WeekChartType } from "@HomePage/mains/WeekChartList";
import WChartItemAlbum from "../WChartItemAlbum";
import WChartItemSong from "../WChartItemSong";

interface Props {
	list: (SongDetail | Album)[];
	type: number;
}

const WChartBody: React.FC<Props> = ({ list, type }) => {
	return (
		<div className="wchart-body-wrapper">
			{type === WeekChartType.Album
				? list.map((item, id) => (
						<WChartItemAlbum rank={id + 2} item={item as Album} />
				  ))
				: list.map((item, id) => (
						<WChartItemSong rank={id + 2} item={item as SongDetail} />
				  ))}
		</div>
	);
};
export default WChartBody;
