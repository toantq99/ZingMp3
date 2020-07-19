import React from "react";
import MusicItem from "../MusicItem";
import MvItem from "../MvItem";

const musicList = new Array(9);
musicList.fill({
	name: "Cho anh say",
	singer: "Phan Duy Anh, ACV",
	count: "1,883",
});

const mvList = new Array(4);
mvList.fill({
	name: "Cho anh say",
	singer: "Phan Duy Anh, ACV",
	count: "1,883",
});

export default function Body({ type, list }) {
	if (!type) list = musicList;
	else list = mvList;
	return (
		<div>
			{type
				? list.map((item, id) => (
						<MvItem
							key={id}
							rank={id === 8 ? "10" : "0" + (id + 2)}
							item={item}
							hasBorder
							type={type}
							color="dark"
						/>
				  ))
				: list.map((item, id) => (
						<MusicItem
							key={id}
							rank={id === 8 ? "10" : "0" + (id + 2)}
							item={item}
							hasBorder
							hasHover={!(type === "mv")}
						/>
				  ))}
		</div>
	);
}
