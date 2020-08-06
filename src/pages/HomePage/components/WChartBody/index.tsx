// Libs
import React from "react";
// Components
import WChartItemAlbum from "../WChartItemAlbum";
import WChartItemSong from "../WChartItemSong";
// Types
import { SongDetail } from "@constants/types/songDetailTypes";
import { Album } from "@constants/types/albumTypes";
import { WeekChartType } from "@constants/types/homeTypes";

interface Props {
	list: (SongDetail | Album)[];
	type: number;
}

const WChartBody: React.FC<Props> = ({ list, type }) => {
	return (
		<div className="wchart-body-wrapper">
			{type === WeekChartType.Album
				? list.map((item, id) => (
						<WChartItemAlbum key={id} rank={id + 2} item={item as Album} />
				  ))
				: list.map((item, id) => (
						<WChartItemSong key={id} rank={id + 2} item={item as SongDetail} />
				  ))}
		</div>
	);
};
export default WChartBody;
