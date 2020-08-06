// Libs
import React from "react";
// Components
import FooterLogo from "@GlobalComponents/atoms/FooterLogo";
// SCSS
import "./style.scss";

const FooterLeft: React.FC = () => {
	return (
		<div className="footer-left-wrapper">
			<FooterLogo />
			<div>
				<div>© 2015 VNG Corporation</div>
				<div>Giấy phép MXH số 314/GP-BTTTT.</div>
			</div>
		</div>
	);
};
export default FooterLeft;
