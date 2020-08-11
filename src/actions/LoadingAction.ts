// Libs
import { Dispatch } from "react";
// Types
import {
	Action_Loading,
	Action_LoadingWithQuery,
} from "@constants/DataTypes/LoadingTypes";
import { ActionType_Album } from "@constants/ActionTypes/AlbumActions";
import { ActionType_Detail } from "@constants/ActionTypes/DetailActions";
import { ActionType_Search } from "@constants/ActionTypes/SearchActions";
import { ActionType_Home } from "@constants/ActionTypes/HomeActions";
import { ActionType_Auth } from "@constants/ActionTypes/AuthActions";

export const setLoadingAlbum = (isLoading: boolean) => (
	dispatch: Dispatch<Action_Loading>
) => dispatch({ type: ActionType_Album.SET_LOADING_ALBUM, payload: isLoading });

export const setLoadingDetail = (isLoading: boolean) => (
	dispatch: Dispatch<Action_Loading>
) =>
	dispatch({
		type: ActionType_Detail.SET_LOADING_TRACK_DETAIL,
		payload: isLoading,
	});

export const setLoadingComments = (isLoading: boolean) => (
	dispatch: Dispatch<Action_Loading>
) =>
	dispatch({
		type: ActionType_Detail.SET_LOADING_COMMENTS,
		payload: isLoading,
	});

export const setLoadingSimilar = (isLoading: boolean) => (
	dispatch: Dispatch<Action_Loading>
) =>
	dispatch({
		type: ActionType_Detail.SET_LOADING_SIMILAR,
		payload: isLoading,
	});

export const setLoadingSearch = (isLoading: boolean) => (
	dispatch: Dispatch<Action_Loading>
) => {
	dispatch({ type: ActionType_Search.SET_LOADING_SEARCH, payload: isLoading });
};

export const setLoadingSuggestList = (query: string, isLoading: boolean) => (
	dispatch: Dispatch<Action_LoadingWithQuery>
) => {
	dispatch({
		type: ActionType_Home.suggestList.SET_LOADING_SUGGESTLIST,
		payload: { isLoading, query },
	});
};
export const setLoadingCollection = (query: string, isLoading: boolean) => (
	dispatch: Dispatch<Action_LoadingWithQuery>
) => {
	dispatch({
		type: ActionType_Home.collection.SET_LOADING_COLLECTION,
		payload: { isLoading, query },
	});
};
export const setLoadingTrackChart = (isLoading: boolean) => (
	dispatch: Dispatch<Action_Loading>
) => {
	dispatch({
		type: ActionType_Home.trackChart.SET_LOADING_TRACKCHART,
		payload: isLoading,
	});
};

export const setLoadingArtistChart = (isLoading: boolean) => (
	dispatch: Dispatch<Action_Loading>
) => {
	dispatch({
		type: ActionType_Home.artistChart.SET_LOADING_ARTISTCHART,
		payload: isLoading,
	});
};
export const setLoadingWeekChartTracks = (isLoading: boolean) => (
	dispatch: Dispatch<Action_Loading>
) => {
	dispatch({
		type: ActionType_Home.weekChart.SET_LOADING_WEEKCHART_TRACKS,
		payload: isLoading,
	});
};
export const setLoadingWeekChartAlbums = (isLoading: boolean) => (
	dispatch: Dispatch<Action_Loading>
) => {
	dispatch({
		type: ActionType_Home.weekChart.SET_LOADING_WEEKCHART_ALBUMS,
		payload: isLoading,
	});
};

export const setLoadingLogin = (isLoading: boolean) => (
	dispatch: Dispatch<Action_Loading>
) => {
	dispatch({
		type: ActionType_Auth.SET_LOADING_LOGIN,
		payload: isLoading,
	});
};

export const setLoadingStorage = (isLoading: boolean) => (
	dispatch: Dispatch<Action_Loading>
) => {
	dispatch({
		type: ActionType_Auth.SET_LOADING_STORAGE,
		payload: isLoading,
	});
};
