import React from "react";
import { CaretUpOutlined, LineOutlined } from "@ant-design/icons";

const Top5ItemCaret = () => {
	const fakeStatus = Math.floor(Math.random() * 10 - 5);
	return (
		<span className="top5-item-caret-wrapper">
			{fakeStatus > 0 ? (
				<div className="status-up">
					<CaretUpOutlined />
					{fakeStatus}
				</div>
			) : fakeStatus < 0 ? (
				<div className="status-down">
					<CaretUpOutlined />
					{-fakeStatus}
				</div>
			) : (
				<div className="status-neutral">
					<LineOutlined />
				</div>
			)}
		</span>
	);
};

export default Top5ItemCaret;
