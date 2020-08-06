import React from "react";
import { ShareAltOutlined } from "@ant-design/icons";
import { SongDetail, SongInAlbum } from "@constants/types/songDetailTypes";

const ButtonShare: React.FC<{ item: SongDetail | SongInAlbum }> = ({
	item,
}) => {
	return (
		<a href={item.link} target="_blank" rel="noopener noreferrer">
			<button className="btn-icon" title="Liên kết">
				<ShareAltOutlined />
			</button>
		</a>
	);
};
export default ButtonShare;
