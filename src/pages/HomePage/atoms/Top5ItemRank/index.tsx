// Libs
import React from "react";
// SCSS
import "./style.scss";

const Top5ItemRank: React.FC<{ rank: number }> = ({ rank }) => {
	return (
		<div className="top5-item-rank-wrapper">
			<span className={"rank-" + rank}>{rank}</span>
		</div>
	);
};

export default Top5ItemRank;
