// Libs
import React from "react";
import { Button } from "antd";
import { ShareAltOutlined } from "@ant-design/icons";
// Types
import { Track } from "@constants/DataTypes/TrackTypes";

const ButtonShare: React.FC<{ song: Track }> = ({ song }) => {
	return (
		<a href={song.link} target="_blank" rel="noopener noreferrer">
			<Button icon={<ShareAltOutlined />}>Chia sẻ</Button>
		</a>
	);
};

export default ButtonShare;
