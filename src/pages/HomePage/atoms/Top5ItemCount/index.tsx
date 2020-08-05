import React from "react";

const Top5ItemCount = () => {
	const fakeCount = Math.floor(Math.random() * 10000) + 10000;

	return <span className="top5-item-count-wrapper">{fakeCount}</span>;
};

export default Top5ItemCount;
