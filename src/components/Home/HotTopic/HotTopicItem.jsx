import React from "react";
import { Link } from "react-router-dom";

export default function HotTopicItem({ item }) {
	return (
		<div className="col-0 p-relative" style={{ margin: "5px 0" }}>
			<Link to="/">
				<img
					src="http://via.placeholder.com/300"
					alt={item}
					style={{ width: "100%" }}
					height={90}
				></img>
				<span
					className="text-upper text-light p-absolute"
					style={{
						top: "50%",
						left: 20,
						transform: "translateY(-50%)",
						fontWeight: "bold",
					}}
				>
					{item}
				</span>
			</Link>
		</div>
	);
}
