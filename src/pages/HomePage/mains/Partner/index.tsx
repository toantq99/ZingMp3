import React from "react";
import { Col, Row } from "antd";
import "./style.scss";
import TitleWithArrow from "@GlobalComponents/mains/TitleWithArrow";
import PartnerImage from "@HomePage/atoms/PartnerImage";

const Partner: React.FC = () => {
	return (
		<div className="partner-wrapper">
			<TitleWithArrow title="Đối tác" />
			{[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((item) => (
				<PartnerImage />
			))}
		</div>
	);
};

export default Partner;
