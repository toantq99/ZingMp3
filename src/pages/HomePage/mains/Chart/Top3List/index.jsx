import React from "react";
import Top3Item from "@HomePage/components/Top3Item";
import "./style.scss";

export default function Top3List({ list }) {
	return (
		<div className="top3-list-wrapper">
			{list.map((item, id) => (
				<div className="col-span-1" key={id}>
					<Top3Item rank={id + 1} item={item} />
				</div>
			))}
		</div>
	);
}
