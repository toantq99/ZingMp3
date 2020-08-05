import React from "react";
import { Link } from "react-router-dom";

const NavTopListCenter = () => {
	return (
		<ul className="nav-top-list-center-wrapper">
			{["MP3", "NEWS", "TV", "ZALO PC"].map((item, id) => (
				<li key={id}>
					<Link to="/">{item}</Link>
				</li>
			))}
		</ul>
	);
};
export default NavTopListCenter;
