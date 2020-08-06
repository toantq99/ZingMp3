// Libs
import React from "react";
import { Link } from "react-router-dom";
// SCSS
import "./style.scss";

const NavBotListCenter: React.FC = () => {
	return (
		<ul className="navbot-list-center-wrapper">
			{[
				"Nhạc cá nhân",
				"#zingchart",
				"Top 100",
				"Chủ đề",
				"Video",
				"Album",
				"Nghệ sĩ",
				"VIP",
			].map((item, id) => (
				<li key={id}>
					<Link to="/">{item}</Link>
				</li>
			))}
		</ul>
	);
};

export default NavBotListCenter;
