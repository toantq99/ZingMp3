import React from "react";
import Top3Item from "./Top3Item";

const topList = new Array(3);
topList.fill({
	name: "Cho anh say",
	singer: "Phan Duy Anh, ACV",
	percent: 38,
});

export default function Top3List() {
	return (
		<div
			className="p-absolute d-flex justify-bw"
			style={{
				bottom: 20,
				width: 600,
				left: "50%",
				transform: "translateX(-50%)",
			}}
		>
			{topList.map((item, id) => (
				<Top3Item id={id} item={item} key={id} />
			))}
		</div>
	);
}
