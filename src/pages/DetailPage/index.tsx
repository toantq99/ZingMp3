import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import MainSong from "./mains/MainSong";
import Comments from "./mains/Comments";
import SongList from "@GlobalComponents/SongList";
import { getSongDetail, emptyDetail } from "@actions/detailAction";
import "./style.scss";

import withLoading from "@HOCs/withLoading";
import { RootState } from "@constants/state";

interface Props {
	match: {
		params: {
			id: string;
		};
	};
}

const DetailPage: React.FC<Props> = ({ match }) => {
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
			<MainSong song={dataSong} />
			<Comments list={dataComments} />
			<SongList name="Cùng ca sĩ" list={dataSimilar} />
		</div>
	);
};

export default DetailPage;
