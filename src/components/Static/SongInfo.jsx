import React from "react";

export default function SongInfo({
	type,
	color,
	subcolor,
	name,
	singer,
	marginLeft,
}) {
	return (
		<div
			className="d-flex"
			style={{ flexDirection: "column", marginLeft: marginLeft }}
		>
			<div
				className={
					"text-cap " + (color === "dark" ? "text-dark" : "text-light")
				}
			>
				{name}
			</div>
			<small
				style={type === "small" ? { fontSize: 10 } : {}}
				className={
					"text-cap " + (subcolor === "light" ? "text-light" : "text-gray")
				}
			>
				{singer}
			</small>
		</div>
	);
}
