// Libs
import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
// Components
import MainSong from "./mains/MainSong";
import Comments from "./mains/Comments";
import SongList from "@GlobalComponents/mains/SongList";
// Actions
import { getSongDetail, emptyDetail } from "@actions/DetailAction";
// Types
import { RootState } from "@constants/State";
// SCSS
import "./style.scss";
import withFetching from "@HOCs/withFetching";

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
	const { data = [], error, isLoading } = similar;
	return (
		<div className="detail-page-wrapper">
			<div className="main">
				<MainSong song={song} />
				<Comments list={comments} />
			</div>
			<div className="recommend">
				{withFetching({ isLoading, error, title: "Cùng ca sĩ" })(
					<SongList name="Cùng ca sĩ" list={data} />
				)}
			</div>
		</div>
	);
};

export default DetailPage;
