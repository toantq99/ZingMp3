import React from "react";
import { Link } from "react-router-dom";
import { HomeFilled } from "@ant-design/icons";

const NavBotHome = () => {
	return (
		<Link to="/">
			<HomeFilled />
		</Link>
	);
};

export default NavBotHome;
