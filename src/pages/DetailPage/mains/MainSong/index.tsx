import React from "react";
import "./style.scss";
import Player from "@DetailPage/components/Player";
import ButtonGroup from "@DetailPage/components/ButtonGroup";
import SingerInfo from "@DetailPage/dumps/SingerInfo";
import SongInfo from "@DetailPage/dumps/SongInfo";
import { SongDetail } from "@constants/types/songDetailTypes";

interface Props {
	song: SongDetail;
}

const MainSong: React.FC<Props> = ({ song }) => {
	const fakeCount = Math.floor(Math.random() * 30000000);
	return (
		<div className="main-song-wrapper">
			<SongInfo song={song} />
			<Player song={song} />
			<div className="player-bottom">
				<span>
					<ButtonGroup song={song} />
				</span>
				<span>{fakeCount} lượt nghe</span>
			</div>
			<SingerInfo singer={song.artist} />
		</div>
	);
};

export default MainSong;
