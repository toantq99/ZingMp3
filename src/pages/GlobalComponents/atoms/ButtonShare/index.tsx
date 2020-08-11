import React from "react";
import { ShareAltOutlined } from "@ant-design/icons";
import { Track } from "@constants/DataTypes/TrackTypes";

const ButtonShare: React.FC<{ item: Track }> = ({ item }) => {
	return (
		<a href={item.link} target="_blank" rel="noopener noreferrer">
			<button className="btn-icon" title="Liên kết">
				<ShareAltOutlined />
			</button>
		</a>
	);
};
export default ButtonShare;
