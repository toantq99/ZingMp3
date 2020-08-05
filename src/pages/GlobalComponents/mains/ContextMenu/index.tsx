import React from "react";
import { Link } from "react-router-dom";
import "./style.scss";
import { SongInAlbum, SongDetail } from "@constants/types/songDetailTypes";
import { Album } from "@constants/types/albumTypes";
import { useDispatch, useSelector } from "react-redux";
import { addFav, removeFav } from "@actions/favListAction";
import { RootState } from "@constants/state";
import ContextMenuLink from "@GlobalComponents/atoms/ContextMenuLink";
import ContextMenuButton from "@GlobalComponents/components/ContextMenuButton";

interface Props {
	type?: string;
	item: SongInAlbum | SongDetail | Album;
}

const ContextMenu: React.FC<Props> = ({ item, type }) => {
	const dispatch = useDispatch();
	const isAdded =
		useSelector((state: RootState) => state.favList.includes(item.id)) &&
		item.type === "track";

	return (
		<ul className="menu">
			<li>
				<ContextMenuButton />
			</li>
			<li>
				<ContextMenuLink />
			</li>
		</ul>
	);
};
export default ContextMenu;
