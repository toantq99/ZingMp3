import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Dropdown } from "antd";
import ContextMenu from "../ContextMenu";
import "./style.scss";
import { SongDetail } from "@constants/types/songDetailTypes";
import { Album } from "@constants/types/albumTypes";
import ThumbnailImage from "@GlobalComponents/components/ThumbnailImage";

interface Props {
	width: number;
	height: number;
	item: SongDetail | Album;
}

const Thumbnail: React.FC<Props> = ({ width, height, item }) => {
	const [hover, setHover] = useState(false);
	return (
		<Dropdown
			overlay={() => <ContextMenu item={item} type={item.type} />}
			trigger={["contextMenu"]}
		>
			<Link
				to={item.type === "track" ? `/bai-hat/${item.id}` : `/album/${item.id}`}
			>
				<ThumbnailImage />
			</Link>
		</Dropdown>
	);
};
export default Thumbnail;
