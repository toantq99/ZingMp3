import React from "react";
import { Row, Col } from "antd";
import "./style.scss";
import Player from "@DetailPage/components/Player";
import ButtonGroup from "@DetailPage/components/ButtonGroup";
import SingerInfo from "@DetailPage/dumps/SingerInfo";

export default function MainSong({ song }) {
	const fakeCount = parseInt(Math.random() * 30000000);
	return (
		<Row gutter={[16, 16]}>
			<Col span={24}>
				<h2>
					{song.title} - {song.artist.name}
				</h2>
				<div className="info">
					<span>Album: </span>
					<span>{song.album.title}</span>
				</div>
				<div className="info">
					<span>Release Date: </span>
					<span>{song.release_date}</span>
				</div>
			</Col>
			<Col span={24}>
				<Player song={song} />
			</Col>
			<Col span={18}>
				<ButtonGroup song={song} />
			</Col>
			<Col span={6} className="right">
				{fakeCount}
			</Col>
			<Col span={24}>
				<SingerInfo singer={song.artist} />
			</Col>
		</Row>
	);
}
