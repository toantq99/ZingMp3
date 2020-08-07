// Libs
import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
// Components
import ButtonRemove from "@DetailPage/atoms/ButtonRemove";
import ButtonAdd from "@DetailPage/atoms/ButtonAdd";
import ButtonShare from "@DetailPage/atoms/ButtonShare";
// Types
import { RootState } from "@constants/state";
import { SongDetail, SongInAlbum } from "@constants/types/songDetailTypes";
// Actions
import { addFav, removeFav } from "@actions/favListAction";
// SCSS
import "./style.scss";

interface Props {
	song: SongDetail | SongInAlbum;
}

const ButtonGroup: React.FC<Props> = ({ song }) => {
	const dispatch = useDispatch();
	let isAdded = useSelector((state: RootState) =>
		state.favList.includes(song.id)
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
