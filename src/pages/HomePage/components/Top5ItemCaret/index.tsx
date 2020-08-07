// Libs
import React from "react";
import {
	CaretUpOutlined,
	LineOutlined,
	CaretDownOutlined,
} from "@ant-design/icons";
// SCSS
import "./style.scss";

const Top5ItemCaret: React.FC = () => {
	const fakeStatus = Math.floor(Math.random() * 10 - 5);
	return (
		<div className="top5-item-caret-wrapper">
			{fakeStatus > 0 ? (
				<div className="status-up">
					<CaretUpOutlined /> {fakeStatus}
				</div>
			) : fakeStatus < 0 ? (
				<div className="status-down">
					<CaretDownOutlined /> {-fakeStatus}
				</div>
			) : (
				<div className="status-neutral">
					<LineOutlined />
				</div>
			)}
		</div>
	);
};

export default Top5ItemCaret;
