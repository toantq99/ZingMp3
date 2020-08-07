// Libs
import React from "react";
import { useSelector, useDispatch } from "react-redux";
// Components
import ButtonRemove from "@GlobalComponents/atoms/ButtonRemove";
import ButtonAdd from "@GlobalComponents/atoms/ButtonAdd";
import ButtonShare from "@GlobalComponents/atoms/ButtonShare";
// Actions
import { addFav, removeFav } from "@actions/favListAction";
// Types
import { SongDetail, SongInAlbum } from "@constants/types/songDetailTypes";
import { RootState } from "@constants/state";
// SCSS
import "./style.scss";

interface Props {
	item: SongDetail | SongInAlbum;
	size?: string;
}

const ButtonGroupInline: React.FC<Props> = ({ item, size }) => {
	const dispatch = useDispatch();
	const isAdded = useSelector((state: RootState) =>
		state.favList.includes(item.id)
	);

	return (
		<span className="button-group-inline-wrapper">
			{isAdded ? (
				<ButtonRemove handleRemove={() => dispatch(removeFav(item))} />
			) : (
				<ButtonAdd handleAdd={() => dispatch(addFav(item))} />
			)}
			<ButtonShare item={item} />
		</span>
	);
};
export default ButtonGroupInline;
