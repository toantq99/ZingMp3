import React from "react";
import { Link } from "react-router-dom";
import "./style.scss";
import { SongInAlbum, SongDetail } from "@constants/types/songDetailTypes";
import { Album } from "@constants/types/albumTypes";
import { useDispatch, useSelector } from "react-redux";
import { addFav, removeFav } from "@actions/favListAction";
import { RootState } from "@constants/state";

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
				{item.type === "track" ? (
					isAdded ? (
						<button
							onClick={() => {
								dispatch(removeFav(item));
							}}
						>
							Bỏ yêu thích
						</button>
					) : (
						<button
							onClick={() => {
								dispatch(addFav(item));
							}}
						>
							Yêu thích
						</button>
					)
				) : null}
			</li>
			<li>
				<Link
					to={type === "album" ? `/album/${item.id}` : `/bai-hat/${item.id}`}
				>
					<button>Nghe</button>
				</Link>
			</li>
		</ul>
	);
};
export default ContextMenu;
