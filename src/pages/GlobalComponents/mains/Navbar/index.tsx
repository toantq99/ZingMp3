import React from "react";
import NavTop from "../../components/NavTop";
import NavBot from "../../components/NavBot";

const Navbar: React.FC = () => {
	return (
		<div className="navbar-wrapper">
			<NavTop />
			<NavBot />
		</div>
	);
};

export default Navbar;
