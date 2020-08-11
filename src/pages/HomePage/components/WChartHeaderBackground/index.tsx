import React from "react";
import { MainTypes } from "@constants/DataTypes/HomeTypes";
import { TrackDetail } from "@constants/DataTypes/TrackTypes";
import { Album } from "@constants/DataTypes/AlbumTypes";

interface Props {
	type: number;
	item: TrackDetail | Album;
}

const WChartHeaderBackground: React.FC<Props> = ({ type, item, children }) => {
	return (
		<div
			className="header-background"
			style={{
				background: `linear-gradient(to bottom, rgba(0,0,0,0) 10%, rgba(0,0,0,1)), url("${
					type === MainTypes.Track
						? (item as TrackDetail).album.cover
						: (item as Album).cover
				}")`,
			}}
		>
			{children}
		</div>
	);
};
export default WChartHeaderBackground;
