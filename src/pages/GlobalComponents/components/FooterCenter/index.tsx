import React from "react";

export default function FooterCenter() {
	return (
		<div className="footer-center-wrapper">
			{[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((item) => (
				<div>Giới thiệu</div>
			))}
		</div>
	);
}
