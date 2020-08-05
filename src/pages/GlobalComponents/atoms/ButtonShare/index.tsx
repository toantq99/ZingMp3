import React from "react";
import { ShareAltOutlined } from "@ant-design/icons";

const ButtonShare = () => {
	return (
		<a href={item.link} target="_blank" rel="noopener noreferrer">
			<button className="btn-icon" title="Liên kết">
				<ShareAltOutlined />
			</button>
		</a>
	);
};
export default ButtonShare;
