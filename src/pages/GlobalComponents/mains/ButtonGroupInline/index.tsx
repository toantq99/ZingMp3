// Libs
import React from "react";
import { useSelector, useDispatch } from "react-redux";
// Components
import ButtonRemove from "@GlobalComponents/atoms/ButtonRemove";
import ButtonAdd from "@GlobalComponents/atoms/ButtonAdd";
import ButtonShare from "@GlobalComponents/atoms/ButtonShare";
// Actions
import { addFav, removeFav } from "@actions/FavListAction";
// Types
import { Track } from "@constants/DataTypes/TrackTypes";
import { RootState } from "@constants/State";
// SCSS
import "./style.scss";

interface Props {
	item: Track;
}

const ButtonGroupInline: React.FC<Props> = ({ item }) => {
	const dispatch = useDispatch();
	const isAdded = useSelector((state: RootState) =>
		state.commons.favList.includes(item.id)
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
