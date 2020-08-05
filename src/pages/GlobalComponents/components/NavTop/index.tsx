import React from "react";
import { Link } from "react-router-dom";
import NavSearch from "../NavSearch";
import "./style.scss";
import NavTopLogo from "@GlobalComponents/atoms/NavTopLogo";
import NavTopListCenter from "../NavTopListCenter";

const NavTop: React.FC = () => {
	return (
		<div className="nav-top-wrapper">
			<div className="nav-top-container">
				<NavTopLogo />
				<NavSearch />
				<NavTopListCenter />
				<Link to="/">Đăng nhập</Link>
			</div>
		</div>
	);
};

export default NavTop;
