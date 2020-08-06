import React from "react";
import { Link } from "react-router-dom";

const NavTopLogo: React.FC = () => {
	return (
		<Link to="/">
			<img
				src="https://static-zmp3.zadn.vn/skins/zmp3-v5.1/images/logo.png"
				alt="logo"
				height={36}
				width={108}
			/>
		</Link>
	);
};

export default NavTopLogo;
