// Libs
import React from "react";
import { Link } from "react-router-dom";
// SCSS
import "./style.scss";

const NavTopList: React.FC = () => {
	return (
		<ul className="nav-top-list-wrapper">
			{["MP3", "NEWS", "TV", "ZALO PC"].map((item, id) => (
				<li key={id}>
					<Link to="/">{item}</Link>
				</li>
			))}
		</ul>
	);
};
export default NavTopList;
