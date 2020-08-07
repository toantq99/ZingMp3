// Libs
import React from "react";
// Components
import ListenCount from "@DetailPage/atoms/ListenCount";
import ButtonGroup from "../ButtonGroup";
// Types
import { SongInAlbum, SongDetail } from "@constants/types/songDetailTypes";
// SCSS
import "./style.scss";

const PlayerBottom: React.FC<{ song: SongInAlbum | SongDetail }> = ({
	song,
}) => {
	return (
		<div className="player-bottom-wrapper">
			<ButtonGroup song={song} />
			<ListenCount />
		</div>
	);
};

export default PlayerBottom;
