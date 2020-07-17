import React from "react";
import SongListItem from "./SongListItem";

const tempList = new Array(10);
tempList.fill({
	name: "ai là người thương em",
	singer: "Quân A.P",
});

export default function SongList({ name, list }) {
	if (!list) list = tempList;
	return (
		<div className="col-0">
			<h2 className="text-upper" style={{ marginTop: -10 }}>
				{name}
			</h2>
			<div>
				{list.map((item, id) => (
					<SongListItem item={item} key={id} id={id} />
				))}
			</div>
		</div>
	);
}
