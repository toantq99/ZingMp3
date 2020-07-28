import React from "react";
import "./style.scss";
import Player from "@DetailPage/components/Player";
import ButtonGroup from "@DetailPage/components/ButtonGroup";
import SingerInfo from "@DetailPage/dumps/SingerInfo";
import SongInfo from "@DetailPage/dumps/SongInfo";

export default function MainSong({ song }) {
	const fakeCount = parseInt(Math.random() * 30000000);
	return (
		<div className="main-song-wrapper">
			<SongInfo song={song} />
			<Player song={song} />
			<div className="player-bottom">
				<span span={18}>
					<ButtonGroup song={song} />
				</span>
				<span>{fakeCount} lượt nghe</span>
			</div>
			<SingerInfo singer={song.artist} />
		</div>
	);
}
