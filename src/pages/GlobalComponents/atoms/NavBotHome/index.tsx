// Libs
import React from "react";
import { Link } from "react-router-dom";
import { HomeFilled } from "@ant-design/icons";

const NavBotHome: React.FC = () => {
	return (
		<Link to="/">
			<HomeFilled />
		</Link>
	);
};

export default NavBotHome;
