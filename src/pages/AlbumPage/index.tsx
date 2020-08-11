// Libs
import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
// Components
import withFetching from "@HOCs/withFetching";
import SingerInfo from "@DetailPage/components/SingerInfo";
import PlayerBottom from "@DetailPage/components/PlayerBottom";
import TrackInfo from "./mains/TrackInfo";
import AlbumPlayer from "./mains/AlbumPlayer";
import TrackList from "./mains/TrackList";
// Types
import { RootState } from "@constants/State/index";
import { EMPTY_ALBUM_DETAIL } from "@constants/EmptyValues/Album";
// Actions
import { getAlbumDetail } from "@actions/AlbumAction";
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

	const { isLoading, data: album = EMPTY_ALBUM_DETAIL, error } = useSelector(
		(state: RootState) => state.album
	);
	const { data: tracks } = album.tracks;
	const currentTrack = tracks[currentTrackIndex] || { artist: {} };

	return withFetching({ isLoading, error })(
		<div className="album-page-wrapper">
			<div className="main">
				<TrackInfo track={currentTrack} album={album} />
				<AlbumPlayer
					{...{
						currentTrackIndex,
						setCurrentTrackIndex,
						duration,
						setDuration,
						setCurrentTime,
						maxLength: tracks.length,
						album,
						currentTrack,
					}}
				/>
				<PlayerBottom song={currentTrack} />
				<SingerInfo singer={album.artist} />
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
