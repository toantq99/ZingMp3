import React from "react";
import { Row, Col, Progress } from "antd";
import { Link } from "react-router-dom";
import { SmileTwoTone } from "@ant-design/icons";
import "./style.scss";
import { SongInAlbum } from "@constants/types/songDetailTypes";

const formarDuration = (duration: number) => {
	const mins = Math.floor(duration / 60);
	const secs = Math.floor(duration % 60);

	return mins + ":" + secs;
};

interface Props {
	item: SongInAlbum;
	index: number;
	isPlaying: boolean;
	duration: number;
	currentTime: number;
	setCurrentTrackIndex: React.Dispatch<React.SetStateAction<number>>;
	setCurrentTime: React.Dispatch<React.SetStateAction<number>>;
}

const TrackItem: React.FC<Props> = ({
	item,
	isPlaying,
	setCurrentTrackIndex,
	setCurrentTime,
	index,
	currentTime,
	duration,
}) => {
	return (
		<Row
			align="middle"
			justify="space-between"
			className="track-item-wrapper"
			onClick={() => {
				setCurrentTrackIndex(index);
				setCurrentTime(0);
			}}
		>
			<Col>
				<div className="title">
					<Link to={`/bai-hat/${item.id}`}>{item.title_short}</Link>
				</div>
				<div>{(item.artist || {}).name}</div>
			</Col>
			<Col flex="50px">
				{isPlaying ? (
					<Progress
						type="circle"
						percent={(currentTime * 100) / duration}
						width={40}
						format={() =>
							currentTime < duration ? (
								formarDuration(currentTime)
							) : (
								<SmileTwoTone twoToneColor="#52c41a" />
							)
						}
					/>
				) : null}
			</Col>
		</Row>
	);
};

export default TrackItem;
