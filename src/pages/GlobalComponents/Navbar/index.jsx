import React from "react";
import NavTop from "./NavTop";
import NavBot from "./NavBot";

export default function Navbar() {
	return (
		<div className="navbar-wrapper">
			<NavTop />
			<NavBot />
		</div>
	);
}
