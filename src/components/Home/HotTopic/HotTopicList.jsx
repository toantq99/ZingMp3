import React from "react";
import { Link } from "react-router-dom";

import HotTopicItem from "./HotTopicItem";

export default function HotTopicList() {
	return (
		<div>
			<h3 className="text-upper">Chủ đề hot</h3>
			{[
				"Trending",
				"Cà phê",
				"Music for love",
				"ca sĩ hàn quốc",
				"hôm nay nghe gì",
			].map((item, id) => (
				<HotTopicItem key={id} item={item} />
			))}
			<Link to="/" className="link text-dark">
				Xem thêm chủ đề khác{" "}
				<span className="material-icons icon">keyboard_arrow_right</span>
			</Link>
		</div>
	);
}
