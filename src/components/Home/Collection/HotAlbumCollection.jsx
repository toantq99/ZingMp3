import React from "react";
import CollectionItem from "./CollectionItem";

const collection = new Array(12);
collection.fill({ name: "Chuyện chưa kể (Single)", singer: "IG, Ngọc" });

export default function HotVideoCollection() {
	return (
		<div>
			<h2 className="text-upper">
				Album Hot
				<span className="material-icons" style={{ verticalAlign: "middle" }}>
					keyboard_arrow_right
				</span>
			</h2>
			<div className="d-flex" style={{ width: "100%", flexWrap: "wrap" }}>
				{collection.map((item, id) => (
					<CollectionItem key={id} item={item} width={150} height={150} />
				))}
			</div>
		</div>
	);
}
