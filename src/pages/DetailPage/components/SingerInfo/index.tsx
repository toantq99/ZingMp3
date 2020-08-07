// Libs
import React from "react";
// Types
import { Singer } from "@constants/types/songDetailTypes";
// SCSS
import "./style.scss";

interface Props {
	singer: Singer;
}

const SingerInfo: React.FC<Props> = ({ singer }) => {
	return (
		<div className="singer-info-wrapper">
			<img src={singer.picture} alt={singer.name} />
			<div className="info">
				<h2>{singer.name}</h2>
				<div>Singer description</div>
			</div>
		</div>
	);
};

export default SingerInfo;
