import React from "react";
import SongItem from "./SongItem";

const tempList = new Array(10);
tempList.fill({
	name: "ai là người thương em",
	singer: "Quân A.P",
});

export default function SongList({ name, list }) {
	if (!list) list = tempList;
	return (
		<div>
			<h2 className="text-upper">{name}</h2>
			<div>
				{list.map((item, id) => (
					<SongItem
						item={item}
						key={id}
						id={id}
						src="https://photo-resize-zmp3.zadn.vn/w94_r1x1_jpeg/cover/f/9/9/2/f9923bfd4debb93b6dc03d5d087b22d7.jpg"
					/>
				))}
			</div>
		</div>
	);
}
