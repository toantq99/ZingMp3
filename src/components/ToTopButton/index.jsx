import React from "react";
import "./style.scss";

export default function ToTopButton() {
	return (
		<button
			className="btn-to-top"
			onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
		>
			<span className="material-icons icon text-light" style={{ fontSize: 30 }}>
				keyboard_arrow_up
			</span>
		</button>
	);
}
