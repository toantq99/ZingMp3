// Libs
import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
// Components
import ButtonRemove from "@DetailPage/atoms/ButtonRemove";
import ButtonAdd from "@DetailPage/atoms/ButtonAdd";
import ButtonShare from "@DetailPage/atoms/ButtonShare";
// Types
import { RootState } from "@constants/State";
import { Track } from "@constants/DataTypes/TrackTypes";
// Actions
import { addFav, removeFav } from "@actions/FavListAction";
// SCSS
import "./style.scss";

interface Props {
	song: Track;
}

const ButtonGroup: React.FC<Props> = ({ song }) => {
	const dispatch = useDispatch();
	let isAdded = useSelector((state: RootState) =>
		state.commons.favList.includes(song.id)
	);
	const [added, setAdded] = useState(isAdded);
	useEffect(() => {
		setAdded(isAdded);
	}, [isAdded]);
	const handleAdd = () => {
		dispatch(addFav(song));
		setAdded(true);
	};
	const handleRemove = () => {
		dispatch(removeFav(song));
		setAdded(false);
	};

	return (
		<span className="button-group-wrapper">
			{added ? (
				<ButtonRemove handleRemove={handleRemove} />
			) : (
				<ButtonAdd handleAdd={handleAdd} />
			)}
			<ButtonShare song={song} />
		</span>
	);
};

export default ButtonGroup;
