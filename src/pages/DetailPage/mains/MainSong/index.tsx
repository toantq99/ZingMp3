import React from "react";
import "./style.scss";
import Player from "../../components/Player";
import ButtonGroup from "../../components/ButtonGroup";
import SingerInfo from "../../dumps/SingerInfo";
import SongInfo from "../../dumps/SongInfo";
import { SongDetail } from "../../../../constants/types/songDetailTypes";

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
