import React from "react";
import { Row, Col } from "antd";
import ReactAudioPlayer from "react-audio-player";
import "./style.scss";

export default function Player({ song }) {
	return (
		<div className="player-wrapper">
			<Row gutter={16}>
				<Col span={6}>
					<img src={song.album.cover_medium} alt="spinner" />
				</Col>
				<Col span={18}>
					<div className="info">
						<h2>{song.title}</h2>
						<h4>{song.artist.name}</h4>
					</div>
				</Col>
			</Row>
			<Row>
				<Col span={24}>
					<ReactAudioPlayer
						src={song.preview}
						autoPlay
						controls
						className="player"
					/>
				</Col>
			</Row>
		</div>
	);
}
