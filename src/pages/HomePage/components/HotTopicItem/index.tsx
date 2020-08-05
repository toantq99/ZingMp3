import React from "react";
import { Link } from "react-router-dom";
import "./style.scss";

const HotTopicItem: React.FC<{ item: number }> = ({ item }) => {
	return (
		<Link to="/">
			<img
				src="https://photo-zmp3.zadn.vn/cover/6/0/8/d/608d6474b6daa5563eb5c088ca08cc98.jpg"
				alt={item.toString()}
				className="img-topic"
			/>
		</Link>
	);
};

export default HotTopicItem;
