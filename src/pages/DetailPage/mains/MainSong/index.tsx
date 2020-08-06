// Libs
import React from "react";
// Components
import Player from "@DetailPage/components/Player";
import SingerInfo from "@DetailPage/components/SingerInfo";
import SongInfo from "@DetailPage/components/SongInfo";
import PlayerBottom from "@DetailPage/components/PlayerBottom";
// Types
import { SongDetail } from "@constants/types/songDetailTypes";

interface Props {
	song: SongDetail;
}

const MainSong: React.FC<Props> = ({ song }) => {
	return (
		<div className="main-song-wrapper">
			<SongInfo song={song} />
			<Player song={song} />
			<PlayerBottom song={song} />
			<SingerInfo singer={song.artist} />
		</div>
	);
};

export default MainSong;
