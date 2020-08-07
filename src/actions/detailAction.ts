// Libs
import { Dispatch } from "react";
// Types
import {
	detailActionTypes,
	SongDetail,
	SimilarSongAction,
	CommentAction,
	EmptyAction,
} from "@constants/types/songDetailTypes";
import { LoadingDispatchAction } from "@constants/types/loadingTypes";
// Actions
import { setLoadingDetail } from "@actions/loadingAction";
// Mocks
import comments from "@mocks/comments";
// Fetcher
import { fetcher } from "./fetcher";

export const getSongDetail = (id: number) => (dispatch: Dispatch<any>) => {
	dispatch(setLoadingDetail("songdetail", true));
	dispatch(setLoadingDetail("similar", true));
	dispatch(setLoadingDetail("comments", true));

	fetcher({ url: `https://deezerdevs-deezer.p.rapidapi.com/track/${id}` }).then(
		(response) => {
			if (response.status === 200) {
				dispatch({
					type: detailActionTypes.GET_SONG_DETAIL,
					payload: response.data,
				});
				dispatch(setLoadingDetail("songdetail", false));
				dispatch(getSimilarSong(response.data));
				dispatch(getComments(response.data));
			}
		}
	);
};

export const getSimilarSong = (song: SongDetail) => (
	dispatch: Dispatch<LoadingDispatchAction | SimilarSongAction>
) => {
	const url = song.artist.tracklist.slice(0, -2) + "15";
	fetcher({
		url: url,
		params: {
			q: `${song.artist.name}`,
		},
		useProxy: true,
	}).then((response) => {
		if (response.status === 200) {
			dispatch({
				type: detailActionTypes.GET_SIMILAR_SONG,
				payload: response.data.data,
			});
			dispatch(setLoadingDetail("similar", false));
		}
	});
};

export const getComments = (song: SongDetail) => (
	dispatch: Dispatch<LoadingDispatchAction | CommentAction>
) => {
	setTimeout(() => {
		dispatch({
			type: detailActionTypes.GET_COMMENTS,
			payload: comments,
		});
		dispatch(setLoadingDetail("comments", false));
	}, 1000);
};

export const emptyDetail = () => (dispatch: Dispatch<EmptyAction>) => {
	dispatch({
		type: detailActionTypes.EMPTY_DETAIL,
		payload: null,
	});
};
