// Libs
import React from "react";
// SCSS
import "./style.scss";

const FooterCenter: React.FC = () => {
	return (
		<div className="footer-center-wrapper">
			{[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((item) => (
				<div key={item}>Giới thiệu</div>
			))}
		</div>
	);
};
export default FooterCenter;
