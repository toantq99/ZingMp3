import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import MainSong from "./mains/MainSong";
import Comments from "./mains/Comments";
import SongList from "@GlobalComponents/SongList";
import { getSongDetail, emptyDetail } from "@actions/detailAction";
import "./style.scss";

import withLoading from "@HOCs/withLoading";

function DetailPage({ match }) {
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(getSongDetail(match.params.id));
		return () => {
			dispatch(emptyDetail());
		};
	}, [dispatch, match.params.id]);

	const { song, similar, comments } = useSelector((state) => state.detail);
	const { isLoading: isLoadingSong = true, data: dataSong } = song;
	const { isLoading: isLoadingSimilar = true, data: dataSimilar } = similar;
	const { isLoading: isLoadingComments = true, data: dataComments } = comments;

	return withLoading(
		(isLoadingSong && isLoadingComments && isLoadingSimilar) || !dataSong.title
	)(
		<div className="detail-page-wrapper">
			<div className="col-span-2">
				<MainSong song={dataSong} />
				<Comments list={dataComments} />
			</div>
			<div className="col-span-1">
				<SongList name="Cùng ca sĩ" list={dataSimilar} />
			</div>
		</div>
	);
}

export default DetailPage;
