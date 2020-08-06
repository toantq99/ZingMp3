// Libs
import React from "react";
// Components
import FooterSocialImage from "@GlobalComponents/atoms/FooterSocialImage";
import FooterDMCA from "@GlobalComponents/atoms/FooterDMCA";
// SCSS
import "./style.scss";

const FooterRight: React.FC = () => {
	return (
		<div className="footer-right-wrapper">
			<div>
				{[1, 2, 3, 4].map((item) => (
					<FooterSocialImage key={item} />
				))}
			</div>
			<FooterDMCA />
			<div>Phiên bản Mobile</div>
		</div>
	);
};

export default FooterRight;
