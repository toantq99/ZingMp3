import React from "react";
import { UpOutlined } from "@ant-design/icons";
import "./style.scss";

export default function ToTopButton() {
	return (
		<button
			className="btn-to-top"
			onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
		>
			<UpOutlined />
		</button>
	);
}
