import React, { useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "@constants/State";
import "./style.scss";
const NavSignupButton: React.FC = () => {
	const [show, setShow] = useState(false);
	const { user } = useSelector((state: RootState) => state.auth);
	return (
		<span className="nav-login-button-wrapper">
			{!user && <button onClick={() => setShow(true)}>Đăng ký</button>}
		</span>
	);
};
export default NavSignupButton;
