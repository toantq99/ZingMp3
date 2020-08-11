// Libs
import React from "react";
// Components
import Player from "@DetailPage/components/Player";
import SingerInfo from "@DetailPage/components/SingerInfo";
import SongInfo from "@DetailPage/components/SongInfo";
import PlayerBottom from "@DetailPage/components/PlayerBottom";
// Types
import { TrackDetail } from "@constants/DataTypes/TrackTypes";
import withFetching from "@HOCs/withFetching";
import { IFetchAndLoadingDetail } from "@constants/State";
import { EMPTY_TRACK_DETAIL } from "@constants/EmptyValues/Track";

interface Props {
	song: IFetchAndLoadingDetail<TrackDetail>;
}

const MainSong: React.FC<Props> = ({ song }) => {
	const { isLoading, data = EMPTY_TRACK_DETAIL, error } = song;
	return withFetching({ isLoading, error })(
		<div className="main-song-wrapper">
			<SongInfo song={data} />
			<Player song={data} />
			<PlayerBottom song={data} />
			<SingerInfo singer={data.artist} />
		</div>
	);
};

export default MainSong;
