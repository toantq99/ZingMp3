import React from "react";

const NavBotListCenter = () => {
	return (
		<ul className="nav-list-bot">
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
