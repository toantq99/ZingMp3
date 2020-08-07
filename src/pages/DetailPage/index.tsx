// Libs
import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
// Components
import withLoading from "@HOCs/withLoading";
import MainSong from "./mains/MainSong";
import Comments from "./mains/Comments";
import SongList from "@GlobalComponents/mains/SongList";
// Actions
import { getSongDetail, emptyDetail } from "@actions/detailAction";
// Types
import { RootState } from "@constants/state";
// SCSS
import "./style.scss";

interface Props {
	match: {
		params: {
			id: string;
		};
	};
}

const DetailPage: React.FC<Props> = ({ match }) => {
	// Fetching data
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(getSongDetail(parseInt(match.params.id)));
		return () => {
			dispatch(emptyDetail());
		};
	}, [dispatch, match.params.id]);
	const { song, similar, comments } = useSelector(
		(state: RootState) => state.detail
	);
	const { isLoading: isLoadingSong = true, data: dataSong } = song;
	const { isLoading: isLoadingSimilar = true, data: dataSimilar } = similar;
	const { isLoading: isLoadingComments = true, data: dataComments } = comments;

	return withLoading(
		isLoadingSong || isLoadingComments || isLoadingSimilar || !dataSong.title
	)(
		<div className="detail-page-wrapper">
			<div className="main">
				<MainSong song={dataSong} />
				<Comments list={dataComments} />
			</div>
			<div className="recommend">
				<SongList name="Cùng ca sĩ" list={dataSimilar} />
			</div>
		</div>
	);
};

export default DetailPage;
