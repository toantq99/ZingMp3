import React from "react";
import "./style.scss";
import Player from "@DetailPage/components/Player";
import ButtonGroup from "@DetailPage/components/ButtonGroup";
import SingerInfo from "@pages/DetailPage/components/SingerInfo";
import SongInfo from "@DetailPage/components/SongInfo";
import ListenCount from "@DetailPage/atoms/ListenCount";
import { SongDetail } from "@constants/types/songDetailTypes";

interface Props {
	song: SongDetail;
}

const MainSong: React.FC<Props> = ({ song }) => {
	return (
		<div className="main-song-wrapper">
			<SongInfo song={song} />
			<Player song={song} />
			<ButtonGroup song={song} />
			<ListenCount />
			<SingerInfo singer={song.artist} />
		</div>
	);
};

export default MainSong;
