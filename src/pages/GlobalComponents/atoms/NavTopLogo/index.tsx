import React from "react";
import { Link } from "react-router-dom";

const NavTopLogo = () => {
	return (
		<Link to="/">
			<img
				src="https://static-zmp3.zadn.vn/skins/zmp3-v5.1/images/logo.png"
				alt="logo"
				className="nav-logo"
			/>
		</Link>
	);
};

export default NavTopLogo;
