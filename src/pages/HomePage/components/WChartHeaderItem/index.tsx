// Libs
import React from "react";
// Components
import WChartHeaderItemTitle from "@HomePage/atoms/WChartHeaderTitle";
import ButtonGroupInline from "@GlobalComponents/mains/ButtonGroupInline";
// Types
import { SongDetail } from "@constants/types/songDetailTypes";
import { Album } from "@constants/types/albumTypes";
// SCSS
import "./style.scss";

const WChartHeaderItem: React.FC<{
	item: SongDetail | Album;
	type: number;
}> = ({ item, type }) => {
	return (
		<div className="wchart-header-item-wrapper">
			<div className="rank">01</div>
			<div className="info">
				<WChartHeaderItemTitle item={item} type={type} />
				<div>{(item.artist || {}).name}</div>
			</div>
			{item.type === "track" ? (
				<div className="button-group">
					<ButtonGroupInline item={item} />
				</div>
			) : null}
		</div>
	);
};
export default WChartHeaderItem;
