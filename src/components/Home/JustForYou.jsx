import React from "react";
import { Link } from "react-router-dom";

export default function JustForYou() {
	return (
		<div className="p-relative">
			<Link to="/">
				<img
					src="http://via.placeholder.com/300"
					alt="just for you"
					style={{ width: "100%" }}
					height={126}
				/>
				<div
					className="p-absolute"
					style={{
						top: "50%",
						left: "50%",
						transform: "translate(-50%, -50%)",
					}}
				></div>
			</Link>
		</div>
	);
}
