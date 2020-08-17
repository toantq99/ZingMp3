// Libs
import React from "react";
// Components
import ButtonThumbnail from "@GlobalComponents/atoms/ButtonThumbnail";
// Types
import { TrackDetail } from "@constants/DataTypes/TrackTypes";
import { Album } from "@constants/DataTypes/AlbumTypes";
// SCSS
import "./style.scss";
interface Props {
	width: number;
	height: number;
	item: TrackDetail | Album;
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
				loading="lazy"
			/>
			<ButtonThumbnail />
		</div>
	);
};

export default ThumbnailImage;
