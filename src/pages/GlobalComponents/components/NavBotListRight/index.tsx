// Libs
import React from "react";
import { PoweroffOutlined, CloudUploadOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
// SCSS
import "./style.scss";

const NavBotListRight: React.FC = () => {
	return (
		<ul className="navbot-list-right-wrapper">
			<li>
				<Link to="/">
					<PoweroffOutlined />
					Tắt quảng cáo
				</Link>
			</li>
			<li>
				<Link to="/">
					<CloudUploadOutlined />
				</Link>
			</li>
		</ul>
	);
};

export default NavBotListRight;
