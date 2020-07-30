import React from "react";
import NavTop from "./NavTop";
import NavBot from "./NavBot";

const Navbar: React.FC = () => {
	return (
		<div className="navbar-wrapper">
			<NavTop />
			<NavBot />
		</div>
	);
};

export default Navbar;
