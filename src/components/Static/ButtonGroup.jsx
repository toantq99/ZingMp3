import React from "react";

export default function ButtonGroup({ mv, type, marginRight, color }) {
	return (
		<span
			style={marginRight ? { marginRight: marginRight } : {}}
			className={color === "light" ? "text-light" : "text-gray"}
		>
			{mv ? (
				<span
					className={
						(type === "small" ? "icon-small " : "") + "material-icons icon"
					}
					style={{ margin: "0 5px" }}
				>
					music_video
				</span>
			) : null}

			{["save_alt", "add", "share"].map((item, id) => (
				<span
					key={id}
					className={
						(type === "small" ? "icon-small " : "") + "material-icons icon"
					}
				>
					{item}
				</span>
			))}
		</span>
	);
}
