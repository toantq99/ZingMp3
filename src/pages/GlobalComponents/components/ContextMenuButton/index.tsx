// Libs
import React from "react";
import { useDispatch } from "react-redux";
// Types
import { SongDetail } from "@constants/types/songDetailTypes";
import { Album } from "@constants/types/albumTypes";
// Actions
import { removeFav, addFav } from "@actions/favListAction";

const ContextMenuButton: React.FC<{
	item: SongDetail | Album;
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
