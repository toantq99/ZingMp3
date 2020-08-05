import React from "react";

const ButtonShare: React.FC<> = () => {
	return (
		<a href={song.link} target="_blank" rel="noopener noreferrer">
			<Button icon={<ShareAltOutlined />}>Chia sẻ</Button>
		</a>
	);
};

export default ButtonShare;
