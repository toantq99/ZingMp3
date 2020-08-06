// Libs
import React from "react";
// Components
import TitleWithArrow from "@GlobalComponents/mains/TitleWithArrow";
import PartnerImage from "@HomePage/atoms/PartnerImage";
// SCSS
import "./style.scss";

const Partner: React.FC = () => {
	return (
		<div className="partner-wrapper">
			<TitleWithArrow title="Đối tác" />
			<div className="partner-list">
				{[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((id) => (
					<PartnerImage key={id} />
				))}
			</div>
		</div>
	);
};

export default Partner;
