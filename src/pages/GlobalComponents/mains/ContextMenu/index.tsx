// Libs
import React from "react";
import { useSelector } from "react-redux";
// Components
import ContextMenuLink from "@GlobalComponents/atoms/ContextMenuLink";
import ContextMenuButton from "@GlobalComponents/components/ContextMenuButton";
// Types
import { TrackDetail } from "@constants/DataTypes/TrackTypes";
import { Album } from "@constants/DataTypes/AlbumTypes";
import { RootState } from "@constants/State";
// SCSS
import "./style.scss";

interface Props {
	type?: string;
	item: TrackDetail | Album;
}

const ContextMenu: React.FC<Props> = ({ item, type }) => {
	const isAdded =
		useSelector((state: RootState) => state.favList.includes(item.id)) &&
		item.type === "track";

	return (
		<ul className="menu">
			<li>
				<ContextMenuButton item={item} isAdded={isAdded} />
			</li>
			<li>
				<ContextMenuLink type={type || "track"} item={item} />
			</li>
		</ul>
	);
};
export default ContextMenu;
