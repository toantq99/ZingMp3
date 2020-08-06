// Libs
import React from "react";
// Components
import WChartHeaderButtons from "../WChartHeaderButtons";
import WChartHeaderBackground from "../WChartHeaderBackground";
import WChartHeaderItem from "../WChartHeaderItem";
// Types
import { SongDetail } from "@constants/types/songDetailTypes";
import { Album } from "@constants/types/albumTypes";
// SCSS
import "./style.scss";

interface Props {
	item: SongDetail | Album;
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
