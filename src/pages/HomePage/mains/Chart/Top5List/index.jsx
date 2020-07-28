import React from "react";
import Top5Item from "@HomePage/components/Top5Item";

export default function Top5List({ list }) {
	return (
		<div className="top5-list-wrapper">
			{list.map((item, id) => (
				<Top5Item key={id} item={item} rank={id + 1} />
			))}
		</div>
	);
}
