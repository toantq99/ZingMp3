// Libs
import React from "react";
import { Dropdown } from "antd";
// Components
import ContextMenu from "../ContextMenu";
import ThumbnailImage from "@GlobalComponents/components/ThumbnailImage";
// Types
import { TrackDetail } from "@constants/DataTypes/TrackTypes";
import { Album } from "@constants/DataTypes/AlbumTypes";
import { Link } from "react-router-dom";

interface Props {
	width: number;
	height: number;
	item: TrackDetail | Album;
}
const Thumbnail: React.FC<Props> = ({ width, height, item }) => {
	return (
		<Dropdown
			overlay={() => <ContextMenu item={item} type={item.type} />}
			trigger={["contextMenu"]}
		>
			<Link
				to={item.type === "track" ? `/bai-hat/${item.id}` : `/album/${item.id}`}
			>
				<ThumbnailImage {...{ width, height, item }} />
			</Link>
		</Dropdown>
	);
};
export default Thumbnail;
