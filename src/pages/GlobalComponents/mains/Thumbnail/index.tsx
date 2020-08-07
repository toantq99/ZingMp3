// Libs
import React from "react";
import { Dropdown } from "antd";
// Components
import ContextMenu from "../ContextMenu";
import ThumbnailImage from "@GlobalComponents/components/ThumbnailImage";
// Types
import { SongDetail } from "@constants/types/songDetailTypes";
import { Album } from "@constants/types/albumTypes";
import { Link } from "react-router-dom";

interface Props {
	width: number;
	height: number;
	item: SongDetail | Album;
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
