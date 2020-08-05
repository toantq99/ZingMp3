import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getAlbumDetail } from "@actions/albumAction";
import { RootState } from "@constants/state/index";
import withLoading from "@HOCs/withLoading";
import TrackInfo from "./mains/TrackInfo";
import SingerInfo from "@DetailPage/components/SingerInfo";
import ButtonGroup from "@DetailPage/components/ButtonGroup";
import "./style.scss";
import TrackList from "./mains/TrackList";
import AlbumPlayer from "./mains/AlbumPlayer";

interface Props {
	match: {
		params: {
			id: string;
		};
	};
}

const AlbumPage: React.FC<Props> = ({ match }) => {
	const dispatch = useDispatch();
	const [currentTrackIndex, setCurrentTrackIndex] = useState(0);
	const [currentTime, setCurrentTime] = useState(0);
	useEffect(() => {
		dispatch(getAlbumDetail(parseInt(match.params.id)));
	}, [dispatch, match.params.id]);

	const { isLoading, detail } = useSelector((state: RootState) => state.album);
	const { data: tracks } = detail.tracks;

	const [duration, setDuration] = useState(-1);
	const currentTrack = tracks[currentTrackIndex] || { artist: {} };

	return withLoading(isLoading)(
		<div className="album-page-wrapper">
			<TrackInfo track={currentTrack} album={detail} />
			<ButtonGroup song={currentTrack} />
			<AlbumPlayer />
			<SingerInfo singer={detail.artist} />
			<TrackList
				list={tracks}
				currentTrackIndex={currentTrackIndex}
				setCurrentTrackIndex={setCurrentTrackIndex}
				setCurrentTime={setCurrentTime}
				currentTime={currentTime}
				duration={duration}
			/>
		</div>
	);
};

export default AlbumPage;
