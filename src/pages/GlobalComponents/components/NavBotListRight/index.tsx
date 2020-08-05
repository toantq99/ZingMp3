import React from "react";
import { PoweroffOutlined, CloudUploadOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";

const NavBotListRight = () => {
	return (
		<ul className="nav-list-bot">
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
