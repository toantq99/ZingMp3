import React from "react";
import { Row, Col } from "antd";
import "./style.scss";
import FooterLeft from "@GlobalComponents/components/FooterLeft";
import FooterCenter from "@GlobalComponents/components/FooterCenter";
import FooterRight from "@GlobalComponents/components/FooterRight";

const Footer: React.FC = () => {
	return (
		<div className="footer">
			<div className="footer-container">
				<FooterLeft />
				<FooterCenter />
				<FooterRight />
			</div>
		</div>
	);
};

export default Footer;
