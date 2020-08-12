// Libs
import { Dispatch } from "react";
// Fetcher
import { fetcher } from "./Fetcher";
// Types
import { Dispatch_Loading } from "@constants/DataTypes/LoadingTypes";
import {
	Action_GetComments,
	Action_GetSimilar,
	TrackDetail,
	Action_Empty,
} from "@constants/DataTypes/TrackTypes";
import { ActionType_Detail } from "@constants/ActionTypes/DetailActions";
// Actions
import {
	setLoadingDetail,
	setLoadingSimilar,
	setLoadingComments,
} from "./LoadingAction";
// Mock
import { generateComments } from "@mocks/comments";

export const getSongDetail = (id: number) => (dispatch: Dispatch<any>) => {
	dispatch(setLoadingDetail(true));
	dispatch(setLoadingComments(true));
	dispatch(setLoadingSimilar(true));

	fetcher({ url: `https://deezerdevs-deezer.p.rapidapi.com/track/${id}` })
		.then((response) => {
			const { error } = response.data;
			const data = response.data;
			dispatch({
				type: ActionType_Detail.GET_TRACK_DETAIL,
				payload: { data, error },
			});
			dispatch(setLoadingDetail(false));
			if (!error) {
				dispatch(getSimilarSong(data));
				dispatch(getComments(data, 5));
			} else {
				dispatch(setLoadingSimilar(false));
				dispatch(setLoadingComments(false));
			}
		})
		.catch((error) => {
			const res = error.response;
			if (res) {
				dispatch({
					type: ActionType_Detail.GET_TRACK_DETAIL,
					payload: { error: error.response.data },
				});
			} else {
				dispatch({
					type: ActionType_Detail.GET_TRACK_DETAIL,
					payload: {
						error: { message: "", type: error.message, code: 400 },
					},
				});
			}
			dispatch(setLoadingDetail(false));
			dispatch(setLoadingSimilar(false));
			dispatch(setLoadingComments(false));
		});
};

export const getSimilarSong = (track: TrackDetail) => (
	dispatch: Dispatch<Dispatch_Loading | Action_GetSimilar>
) => {
	fetcher({
		url: track.artist.tracklist,
		params: {
			limit: 15,
		},
		useProxy: true,
	})
		.then((response) => {
			const { data, error } = response.data;
			dispatch({
				type: ActionType_Detail.GET_SIMILAR_SONGS,
				payload: { data, error },
			});
		})
		.catch((error) => {
			const res = error.response;
			if (res) {
				dispatch({
					type: ActionType_Detail.GET_SIMILAR_SONGS,
					payload: { error: error.response.data },
				});
			} else {
				dispatch({
					type: ActionType_Detail.GET_SIMILAR_SONGS,
					payload: {
						error: { message: "", type: error.message, code: 400 },
					},
				});
			}
		})
		.finally(() => dispatch(setLoadingSimilar(false)));
};

export const getComments = (track: TrackDetail, limit: number) => (
	dispatch: Dispatch<Dispatch_Loading | Action_GetComments>
) => {
	setTimeout(() => {
		dispatch({
			type: ActionType_Detail.GET_COMMENTS,
			payload: { data: generateComments(limit) },
		});

		dispatch(setLoadingComments(false));
	}, 1000);
};

export const emptyDetail = () => (dispatch: Dispatch<Action_Empty>) => {
	dispatch({
		type: ActionType_Detail.EMPTY_DETAIL,
		payload: null,
	});
};
