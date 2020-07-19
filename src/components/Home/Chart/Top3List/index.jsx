import React from "react";
import Top3Item from "./Top3Item";
import "./style.scss";

const topList = new Array(3);
topList.fill({
	name: "Cho anh say",
	singer: "Phan Duy Anh, ACV",
	percent: 38,
});

export default function Top3List() {
	return (
		<div className="chart-top3-list">
			{topList.map((item, id) => (
				<Top3Item id={id} item={item} key={id} />
			))}
		</div>
	);
}
