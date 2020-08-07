// Libs
import React from "react";
// Components
import ButtonThumbnail from "@GlobalComponents/atoms/ButtonThumbnail";
// Types
import { SongDetail } from "@constants/types/songDetailTypes";
import { Album } from "@constants/types/albumTypes";
// SCSS
import "./style.scss";
interface Props {
	width: number;
	height: number;
	item: SongDetail | Album;
}

const ThumbnailImage: React.FC<Props> = ({ item, width, height }) => {
	return (
		<div className="thumbnail-image-wrapper">
			<img
				src={item.type === "track" ? item.album.cover_big : item.cover_big}
				alt="cover"
				width={width}
				height={height}
				className="image"
			/>
			<ButtonThumbnail />
		</div>
	);
};

export default ThumbnailImage;
