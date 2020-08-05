import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import "./style.scss";

import { RootState } from "@constants/state";
import { SongDetail, SongInAlbum } from "@constants/types/songDetailTypes";
import ButtonRemove from "@pages/DetailPage/atoms/ButtonRemove";
import ButtonAdd from "@pages/DetailPage/atoms/ButtonAdd";
import ButtonShare from "@pages/DetailPage/atoms/ButtonShare";

interface Props {
	song: SongDetail | SongInAlbum;
}

const ButtonGroup: React.FC<Props> = ({ song }) => {
	let isAdded = useSelector((state: RootState) =>
		state.favList.includes(song.id)
	);
	const [added, setAdded] = useState(isAdded);
	useEffect(() => {
		setAdded(isAdded);
	}, [isAdded]);
	const dispatch = useDispatch();

	return (
		<span className="button-group-wrapper">
			{added ? <ButtonRemove /> : <ButtonAdd />}
			<ButtonShare />
		</span>
	);
};

export default ButtonGroup;
