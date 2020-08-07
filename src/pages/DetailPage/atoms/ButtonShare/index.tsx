// Libs
import React from "react";
import { Button } from "antd";
import { ShareAltOutlined } from "@ant-design/icons";
// Types
import { SongDetail, SongInAlbum } from "@constants/types/songDetailTypes";

const ButtonShare: React.FC<{ song: SongDetail | SongInAlbum }> = ({
	song,
}) => {
	return (
		<a href={song.link} target="_blank" rel="noopener noreferrer">
			<Button icon={<ShareAltOutlined />}>Chia sẻ</Button>
		</a>
	);
};

export default ButtonShare;
