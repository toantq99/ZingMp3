// Libs
import React from "react";
import { useDispatch } from "react-redux";
// Types
import { TrackDetail } from "@constants/DataTypes/TrackTypes";
import { Album } from "@constants/DataTypes/AlbumTypes";
// Actions
import { removeFav, addFav } from "@actions/FavListAction";

const ContextMenuButton: React.FC<{
	item: TrackDetail | Album;
	isAdded: boolean;
}> = ({ item, isAdded }) => {
	const dispatch = useDispatch();
	if (item.type === "track") {
		return (
			<>
				{isAdded ? (
					<button onClick={() => dispatch(removeFav(item))}>
						Bỏ yêu thích
					</button>
				) : (
					<button onClick={() => dispatch(addFav(item))}>Yêu thích</button>
				)}
			</>
		);
	} else {
		return null;
	}
};
export default ContextMenuButton;
