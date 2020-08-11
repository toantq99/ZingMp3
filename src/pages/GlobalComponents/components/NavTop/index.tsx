// Libs
import React from "react";
// Components
import NavTopLogo from "@GlobalComponents/atoms/NavTopLogo";
import NavSearch from "../NavSearch";
import NavTopList from "../NavTopList";
// SCSS
import "./style.scss";
import NavLoginButton from "../NavLoginButton";

const NavTop: React.FC = () => {
	return (
		<div className="nav-top-wrapper">
			<div className="nav-top-container">
				<NavTopLogo />
				<NavSearch />
				<NavTopList />
				<NavLoginButton />
			</div>
		</div>
	);
};

export default NavTop;
