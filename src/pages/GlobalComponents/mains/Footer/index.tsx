// Libs
import React from "react";
// Components
import FooterLeft from "@GlobalComponents/components/FooterLeft";
import FooterCenter from "@GlobalComponents/components/FooterCenter";
import FooterRight from "@GlobalComponents/components/FooterRight";
// SCSS
import "./style.scss";

const Footer: React.FC = () => {
	return (
		<div className="footer-wrapper">
			<div className="footer-container">
				<FooterLeft />
				<FooterCenter />
				<FooterRight />
			</div>
		</div>
	);
};

export default Footer;
