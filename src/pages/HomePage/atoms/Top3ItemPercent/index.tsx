// Libs
import React from "react";
// SCSS
import "./style.scss";

const Top3ItemPercent: React.FC<{ rank: number }> = ({ rank }) => {
	const fakePercent = Math.floor(Math.random() * 50);
	return (
		<div className={"top3-item-percent-wrapper"}>
			<span className={"percent-" + rank}>{fakePercent + "%"}</span>
		</div>
	);
};

export default Top3ItemPercent;
