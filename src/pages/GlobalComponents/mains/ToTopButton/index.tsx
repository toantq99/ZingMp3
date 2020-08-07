// Libs
import React from "react";
import { UpOutlined } from "@ant-design/icons";
// SCSS
import "./style.scss";

const ToTopButton: React.FC = () => {
	return (
		<button
			className="btn-to-top"
			onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
		>
			<UpOutlined />
		</button>
	);
};

export default ToTopButton;
