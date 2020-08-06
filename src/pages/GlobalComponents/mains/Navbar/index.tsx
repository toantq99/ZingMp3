import React from "react";
import NavTop from "@GlobalComponents/components/NavTop";
import NavBot from "@GlobalComponents/components/NavBot";

const Navbar: React.FC = () => {
	return (
		<div className="navbar-wrapper">
			<NavTop />
			<NavBot />
		</div>
	);
};

export default Navbar;
