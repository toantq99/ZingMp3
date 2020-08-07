// Libs
import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
// Components
import withLoading from "@HOCs/withLoading";
import SingerInfo from "@DetailPage/components/SingerInfo";
import PlayerBottom from "@DetailPage/components/PlayerBottom";
import TrackInfo from "./mains/TrackInfo";
import AlbumPlayer from "./mains/AlbumPlayer";
import TrackList from "./mains/TrackList";
// Types
import { RootState } from "@constants/state/index";
// Actions
import { getAlbumDetail } from "@actions/albumAction";
//SCSS
import "./style.scss";

interface Props {
	match: {
		params: {
			id: string;
		};
	};
}

const AlbumPage: React.FC<Props> = ({ match }) => {
	const dispatch = useDispatch();
	const [currentTime, setCurrentTime] = useState(0);
	const [currentTrackIndex, setCurrentTrackIndex] = useState(0);
	const [duration, setDuration] = useState(-1);

	// Fetching data
	useEffect(() => {
		dispatch(getAlbumDetail(parseInt(match.params.id)));
	}, [dispatch, match.params.id]);

	const { isLoading, detail } = useSelector((state: RootState) => state.album);
	const { data: tracks } = detail.tracks;
	const currentTrack = tracks[currentTrackIndex] || { artist: {} };

	return withLoading(isLoading)(
		<div className="album-page-wrapper">
			<div className="main">
				<TrackInfo track={currentTrack} album={detail} />
				<AlbumPlayer
					{...{
						currentTrackIndex,
						setCurrentTrackIndex,
						duration,
						setDuration,
						setCurrentTime,
						maxLength: tracks.length,
						detail,
						currentTrack,
					}}
				/>
				<PlayerBottom song={currentTrack} />
				<SingerInfo singer={detail.artist} />
			</div>
			<div className="album-list">
				<TrackList
					{...{
						list: tracks,
						currentTrackIndex,
						setCurrentTrackIndex,
						currentTime,
						setCurrentTime,
						duration,
					}}
				/>
			</div>
		</div>
	);
};

export default AlbumPage;
