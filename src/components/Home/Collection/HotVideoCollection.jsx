import React from "react";
import CollectionItem from "./CollectionItem";

const collection = new Array(12);
collection.fill({ name: "Bigcityboy", singer: "Binz, Touliver" });

export default function HotVideoCollection() {
	return (
		<div>
			<h2 className="text-upper">
				Video Hot
				<span className="material-icons" style={{ verticalAlign: "middle" }}>
					keyboard_arrow_right
				</span>
			</h2>
			<div className="d-flex" style={{ width: "100%", flexWrap: "wrap" }}>
				{collection.map((item, id) => (
					<CollectionItem key={id} item={item} width={142} height={80} />
				))}
			</div>
		</div>
	);
}
