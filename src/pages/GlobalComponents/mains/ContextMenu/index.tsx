// Libs
import React from "react";
import { useSelector } from "react-redux";
// Components
import ContextMenuLink from "@GlobalComponents/atoms/ContextMenuLink";
import ContextMenuButton from "@GlobalComponents/components/ContextMenuButton";
// Types
import { SongDetail } from "@constants/types/songDetailTypes";
import { Album } from "@constants/types/albumTypes";
import { RootState } from "@constants/state";
// SCSS
import "./style.scss";

interface Props {
	type?: string;
	item: SongDetail | Album;
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
