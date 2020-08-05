import React from "react";
import FooterSocialImage from "@GlobalComponents/atoms/FooterSocialImage";
import FooterDMCA from "@GlobalComponents/atoms/FooterDMCA";

const FooterRight = () => {
	return (
		<div className="footer-right-wrapper">
			{[1, 2, 3, 4].map((item) => (
				<FooterSocialImage />
			))}
			<FooterDMCA />
			<div>Phiên bản Mobile</div>
		</div>
	);
};

export default FooterRight;
