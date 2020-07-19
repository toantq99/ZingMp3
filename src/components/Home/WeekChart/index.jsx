import React from "react";
import Header from "./Header";
import Body from "./Body";

export default function WeekChart({ name, list, type }) {
	return (
		<div>
			<h4 className="text-upper">
				{name}
				<span className="material-icons icon-right">keyboard_arrow_right</span>
				<span className="material-icons icon-right" style={{ float: "right" }}>
					play_circle_outline
				</span>
			</h4>
			<Header type={type} />
			<Body type={type} />
		</div>
	);
}
