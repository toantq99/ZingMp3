import React from "react";
import { Singer } from "@constants/types/songDetailTypes";

interface Props {
	singer: Singer;
	className?: string;
}

const SingerInfo: React.FC<Props> = ({ singer, className }) => {
	return (
		<div>
			<img src={singer.picture} alt="singer" />
			<h2>{singer.name}</h2>
			<div>Singer description</div>
		</div>
	);
};

export default SingerInfo;
