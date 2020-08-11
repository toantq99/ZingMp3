import React, { useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "@constants/State";
import LoginModal from "../LoginModal";
import LogoutConfirm from "../LogoutConfirm";
import "./style.scss";
const NavLoginButton: React.FC = () => {
	const [showLogin, setShowLogin] = useState(false);
	const { user } = useSelector((state: RootState) => state.auth);
	return (
		<span className="nav-login-button-wrapper">
			{user ? (
				<LogoutConfirm>
					<button>{user.fullName}</button>
				</LogoutConfirm>
			) : (
				<button onClick={() => setShowLogin(true)}>Đăng nhập</button>
			)}

			<LoginModal visible={showLogin} setVisible={setShowLogin} />
		</span>
	);
};
export default NavLoginButton;
