// Libs
import React from "react";
import { Link } from "react-router-dom";
// Components
import NavTopLogo from "@GlobalComponents/atoms/NavTopLogo";
import NavSearch from "../NavSearch";
import NavTopList from "../NavTopList";
// SCSS
import "./style.scss";

const NavTop: React.FC = () => {
	return (
		<div className="nav-top-wrapper">
			<div className="nav-top-container">
				<NavTopLogo />
				<NavSearch />
				<NavTopList />
				<Link to="/">Đăng nhập</Link>
			</div>
		</div>
	);
};

export default NavTop;
