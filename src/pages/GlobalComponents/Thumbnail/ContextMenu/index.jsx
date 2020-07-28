import React from "react";
import { Link } from "react-router-dom";
import "./style.scss";

export default function ContextMenu({ item }) {
	return (
		<ul className="menu">
			<li>
				<button
					onClick={() => {
						console.log(item);
					}}
				>
					.....
				</button>
			</li>
			<li>
				<Link to={`/bai-hat/${item.id}`}>
					<button>Nghe</button>
				</Link>
			</li>
		</ul>
	);
}
