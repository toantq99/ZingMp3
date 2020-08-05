import React from "react";
import { Link } from "react-router-dom";
import WChartHeaderItemTitle from "@HomePage/atoms/WChartHeaderTitle";

const WChartHeaderItem = () => {
	return (
		<div className="wchart-header-item-wrapper">
			<div>01</div>
			<WChartHeaderItemTitle />
			<div>{(item.artist || {}).name}</div>
		</div>
	);
};
export default WChartHeaderItem;
