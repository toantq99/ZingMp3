import React, { useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "@constants/State";
import LoginModal from "../LoginModal";
import LogoutConfirm from "../LogoutConfirm";
import "./style.scss";
import SignupModal from "../SignupModal";
const NavLoginButton: React.FC = () => {
	const [showLogin, setShowLogin] = useState(false);
	const [showSignup, setShowSignup] = useState(false);
	const { user } = useSelector((state: RootState) => state.commons.auth);
	return (
		<span className="nav-login-button-wrapper">
			{user ? (
				<LogoutConfirm>
					<button>{user.fullName}</button>
				</LogoutConfirm>
			) : (
				<>
					<button onClick={() => setShowLogin(true)}>Đăng nhập</button>
					<button onClick={() => setShowSignup(true)}>Đăng ký</button>
				</>
			)}
			<LoginModal visible={showLogin} setVisible={setShowLogin} />
			<SignupModal visible={showSignup} setVisible={setShowSignup} />
		</span>
	);
};
export default NavLoginButton;
