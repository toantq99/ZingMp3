// Libs
import React from "react";
// Components
import WChartItemAlbum from "../WChartItemAlbum";
import WChartItemSong from "../WChartItemSong";
// Types
import { TrackDetail } from "@constants/DataTypes/TrackTypes";
import { Album } from "@constants/DataTypes/AlbumTypes";
import { MainTypes } from "@constants/DataTypes/HomeTypes";

interface Props {
	list: (TrackDetail | Album)[];
	type: number;
}

const WChartBody: React.FC<Props> = ({ list, type }) => {
	return (
		<div className="wchart-body-wrapper">
			{type === MainTypes.Album
				? list.map((item, id) => (
						<WChartItemAlbum key={id} rank={id + 2} item={item as Album} />
				  ))
				: list.map((item, id) => (
						<WChartItemSong key={id} rank={id + 2} item={item as TrackDetail} />
				  ))}
		</div>
	);
};
export default WChartBody;
