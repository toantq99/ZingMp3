import React from "react";
import { Link } from "react-router-dom";

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
			<Link
				to="/"
				className={
					"text-cap song-name " +
					(color === "dark" ? "text-dark" : "text-light")
				}
				title={name + " - " + singer}
			>
				{name}
			</Link>
			<Link to="/">
				<small
					style={type === "small" ? { fontSize: 10 } : {}}
					className={
						"text-cap " + (subcolor === "light" ? "text-light" : "text-gray")
					}
					title={singer}
				>
					{singer}
				</small>
			</Link>
		</div>
	);
}
