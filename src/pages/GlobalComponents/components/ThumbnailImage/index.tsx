import React from "react";
import { PlayCircleOutlined } from "@ant-design/icons";

const ThumbnailImage = () => {
	return (
		<div
			className="thumbnail-image-wrapper"
			onMouseEnter={() => setHover(true)}
			onMouseLeave={() => setHover(false)}
		>
			<img
				src={item.type === "track" ? item.album.cover_big : item.cover_big}
				alt="cover"
				width={width}
				height={height}
			/>
			{hover ? (
				<button className="btn-play" onMouseEnter={() => setHover(true)}>
					<PlayCircleOutlined />
				</button>
			) : null}
		</div>
	);
};

export default ThumbnailImage;
