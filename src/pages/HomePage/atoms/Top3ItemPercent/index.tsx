import React from "react";

const Top3ItemPercent = () => {
	const fakePercent = Math.floor(Math.random() * 50);

	return <div className={"top3-item-percent-wrapper"}>{fakePercent + "%"}</div>;
};

export default Top3ItemPercent;
