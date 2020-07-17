import React from "react";
import CollectionItem from "./CollectionItem";

const collection = new Array(8);
collection.fill({ name: "Nghe là muốn... yêu ngay" });

export default function LoveCollection() {
	return (
		<div>
			<h2 className="text-upper">Yêu thì có sao</h2>
			<div className="d-flex" style={{ width: "100%", flexWrap: "wrap" }}>
				{collection.map((item, id) => (
					<CollectionItem key={id} item={item} width={150} height={150} />
				))}
			</div>
		</div>
	);
}
