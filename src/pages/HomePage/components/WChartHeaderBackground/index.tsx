import React from "react";
import { WeekChartType } from "@constants/types/homeTypes";
import { SongDetail } from "@constants/types/songDetailTypes";
import { Album } from "@constants/types/albumTypes";

interface Props {
	type: number;
	item: SongDetail | Album;
}

const WChartHeaderBackground: React.FC<Props> = ({ type, item, children }) => {
	return (
		<div
			className="header-background"
			style={{
				background: `linear-gradient(to bottom, rgba(0,0,0,0) 10%, rgba(0,0,0,1)), url("${
					type === WeekChartType.Track
						? (item as SongDetail).album.cover
						: (item as Album).cover
				}")`,
			}}
		>
			{children}
		</div>
	);
};
export default WChartHeaderBackground;
