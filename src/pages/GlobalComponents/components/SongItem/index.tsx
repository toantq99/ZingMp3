// Libs
import React from "react";
// Components
import ButtonGroupInline from "@GlobalComponents/mains/ButtonGroupInline";
import SongItemInfo from "../SongItemInfo";
import Thumbnail from "@GlobalComponents/mains/Thumbnail";
// Types
import { TrackDetail } from "@constants/DataTypes/TrackTypes";
// SCSS
import "./style.scss";

interface Props {
	item: TrackDetail;
	size?: string;
}

const SongItem: React.FC<Props> = ({ item, size }) => {
	return (
		<div className="song-item-wrapper">
			<Thumbnail
				width={size === "large" ? 100 : 50}
				height={size === "large" ? 100 : 50}
				item={item}
			/>
			<SongItemInfo item={item} size={size} />
			<div className="button-group-container">
				<ButtonGroupInline item={item} />
			</div>
		</div>
	);
};
export default SongItem;
