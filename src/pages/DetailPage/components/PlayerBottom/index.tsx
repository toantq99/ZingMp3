// Libs
import React from "react";
// Components
import ListenCount from "@DetailPage/atoms/ListenCount";
import ButtonGroup from "../ButtonGroup";
// Types
import { Track } from "@constants/DataTypes/TrackTypes";
// SCSS
import "./style.scss";

const PlayerBottom: React.FC<{ song: Track }> = ({ song }) => {
	return (
		<div className="player-bottom-wrapper">
			<ButtonGroup song={song} />
			<ListenCount />
		</div>
	);
};

export default React.memo(PlayerBottom);
