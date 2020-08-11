// Libs
import React from "react";
// Components
import WChartHeaderButtons from "../WChartHeaderButtons";
import WChartHeaderBackground from "../WChartHeaderBackground";
import WChartHeaderItem from "../WChartHeaderItem";
// Types
import { TrackDetail } from "@constants/DataTypes/TrackTypes";
import { Album } from "@constants/DataTypes/AlbumTypes";
// SCSS
import "./style.scss";

interface Props {
	item: TrackDetail | Album;
	type: number;
}

const WChartHeader: React.FC<Props> = ({ item, type }) => {
	return (
		<div className="wchart-header-wrapper">
			<WChartHeaderButtons />
			<WChartHeaderBackground item={item} type={type}>
				<WChartHeaderItem item={item} type={type} />
			</WChartHeaderBackground>
		</div>
	);
};
export default WChartHeader;
