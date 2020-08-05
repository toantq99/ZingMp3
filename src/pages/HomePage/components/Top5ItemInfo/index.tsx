import React from "react";
import { Link } from "react-router-dom";

const Top5ItemInfo = ({ item }) => {
	return (
		<>
			<Link
				to={`/bai-hat/${item.id}`}
				title={item.title + " - " + item.artist.name}
			>
				{item.title}
			</Link>
			<small>{item.artist.name}</small>
		</>
	);
};
export default Top5ItemInfo;
