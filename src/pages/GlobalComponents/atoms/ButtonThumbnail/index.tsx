// Libs
import React from "react";
import { PlayCircleOutlined } from "@ant-design/icons";
// SCSS
import "./style.scss";

const ButtonThumbnail: React.FC = () => {
	return (
		<button
			className="btn-thumbnail-wrapper"
			onMouseEnter={(e) => e.preventDefault()}
		>
			<PlayCircleOutlined />
		</button>
	);
};
export default ButtonThumbnail;
