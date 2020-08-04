import { albumActionTypes } from "@constants/types/albumTypes";
import { homeActionTypes } from "@constants/types/homeTypes";
import { detailActionTypes } from "@constants/types/songDetailTypes";
import { searchActionTypes } from "@constants/types/searchTypes";

import { LoadingAction } from "@constants/types/loadingTypes";
import { Dispatch } from "react";

const setLoadingAlbum = (isLoading: boolean) => (
	dispatch: Dispatch<LoadingAction>
) => dispatch({ type: albumActionTypes.SET_LOADING_ALBUM, payload: isLoading });

const setLoadingHome = (type: string, isLoading: boolean) => (
	dispatch: Dispatch<LoadingAction>
) => {
	let actionType;
	switch (type) {
		case "songchart":
			actionType = homeActionTypes.chart.SET_LOADING_SONGCHART;
			break;
		case "artistchart":
			actionType = homeActionTypes.chart.SET_LOADING_ARTISTCHART;
			break;
		case "collection":
			actionType = homeActionTypes.collection.SET_LOADING_COLLECTION;
			break;
		case "weekchart":
			actionType = homeActionTypes.weekChart.SET_LOADING_WEEKCHART;
			break;
		case "suggest":
			actionType = homeActionTypes.suggest.SET_LOADING_SUGGEST;
			break;
		default:
			return;
	}

	dispatch({ type: actionType, payload: isLoading });
};

const setLoadingDetail = (type: string, isLoading: boolean) => (
	dispatch: Dispatch<LoadingAction>
) => {
	let actionType;
	switch (type) {
		case "songdetail":
			actionType = detailActionTypes.SET_LOADING_SONG_DETAIL;
			break;
		case "similar":
			actionType = detailActionTypes.SET_LOADING_SIMILAR;
			break;
		case "comments":
			actionType = detailActionTypes.SET_LOADING_COMMENTS;
			break;
		default:
			return;
	}

	dispatch({ type: actionType, payload: isLoading });
};

const setLoadingSearch = (isLoading: boolean) => (
	dispatch: Dispatch<LoadingAction>
) => {
	dispatch({ type: searchActionTypes.SET_LOADING_SEARCH, payload: isLoading });
};

export { setLoadingAlbum, setLoadingHome, setLoadingDetail, setLoadingSearch };
