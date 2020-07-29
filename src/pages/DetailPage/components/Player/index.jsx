import React from "react";
import { Row, Col } from "antd";
import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";
import "./style.scss";

export default function Player({ song, cover, onListen, onPlay = () => {} }) {
	return (
		<div className="player-wrapper">
			<Row gutter={[16, 20]}>
				<Col span={6}>
					<img
						src={song.album ? song.album.cover_medium : cover}
						alt="spinner"
					/>
				</Col>
				<Col span={18}>
					<div className="info">
						<h2>{song.title}</h2>
						<h4>{song.artist ? song.artist.name : null}</h4>
					</div>
				</Col>
			</Row>
			<Row>
				<Col span={24}>
					<AudioPlayer
						autoPlay
						src={song.preview}
						onListen={onListen}
						onPlay={(e) => {
							onPlay(e);
							e.target.onloadedmetadata = onPlay;
						}}
						className="player"
					/>
				</Col>
			</Row>
		</div>
	);
}
