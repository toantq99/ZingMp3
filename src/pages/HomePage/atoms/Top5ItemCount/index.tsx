// Libs
import React from "react";
// SCSS
import "./style.scss";

const Top5ItemCount: React.FC = () => {
	const fakeCount = Math.floor(Math.random() * 10000) + 10000;
	return <div className="top5-item-count-wrapper">{fakeCount}</div>;
};

export default Top5ItemCount;
