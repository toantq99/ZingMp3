// Libs
import React from "react";
// SCSS
import "./style.scss";

const Top3ItemRank: React.FC<{ rank: number }> = ({ rank }) => {
	return (
		<div className="top3-item-rank-wrapper">
			<span className={"rank-" + rank}>{"0" + rank}</span>
		</div>
	);
};

export default Top3ItemRank;
