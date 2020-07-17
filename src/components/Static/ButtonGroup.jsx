import React from "react";

export default function ButtonGroup({ mv, type, marginRight, color }) {
	return (
		<span
			style={marginRight ? { marginRight: marginRight } : {}}
			className={color === "light" ? "text-light" : "text-gray"}
		>
			{mv ? (
				<button className="btn-icon">
					<span
						className={
							(type === "small" ? "icon-small " : "") + "material-icons icon"
						}
						style={{ margin: "0 5px" }}
					>
						music_video
					</span>
				</button>
			) : null}

			{["save_alt", "add", "share"].map((item, id) => (
				<button className="btn-icon">
					<span
						key={id}
						className={
							(type === "small" ? "icon-small " : "") + "material-icons icon"
						}
					>
						{item}
					</span>
				</button>
			))}
		</span>
	);
}
