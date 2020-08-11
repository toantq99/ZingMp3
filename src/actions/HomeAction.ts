// Libs
import { Dispatch } from "react";
// Fetcher
import { fetcher } from "./Fetcher";
// Types
import { Album } from "@constants/DataTypes/AlbumTypes";
import { Dispatch_Loading } from "@constants/DataTypes/LoadingTypes";
import {
	Action_GetListWithQuery,
	Action_GetList,
} from "@constants/DataTypes/HomeTypes";
import { TrackDetail, Artist } from "@constants/DataTypes/TrackTypes";
import { ActionType_Home } from "@constants/ActionTypes/HomeActions";
// Actions
import {
	setLoadingSuggestList,
	setLoadingCollection,
	setLoadingTrackChart,
	setLoadingArtistChart,
	setLoadingWeekChartTracks,
	setLoadingWeekChartAlbums,
} from "./LoadingAction";

export const getSuggestList = (query: string) => (
	dispatch: Dispatch<Dispatch_Loading | Action_GetListWithQuery<TrackDetail>>
) => {
	dispatch(setLoadingSuggestList(query, true));
	fetcher({
		url: "https://deezerdevs-deezer.p.rapidapi.com/search",
		params: { q: query, limit: 10 },
	})
		.then((response) => {
			const { error, data } = response.data;
			return dispatch({
				type: ActionType_Home.suggestList.GET_SUGGESTLIST,
				payload: { query, data, error },
			});
		})
		.then(() => dispatch(setLoadingSuggestList(query, false)))
		.catch((error) =>
			dispatch({
				type: ActionType_Home.suggestList.GET_SUGGESTLIST,
				payload: { query, error },
			})
		);
};

export const getCollection = (query: string) => (
	dispatch: Dispatch<Dispatch_Loading | Action_GetListWithQuery<TrackDetail>>
) => {
	dispatch(setLoadingCollection(query, true));
	fetcher({
		url: "https://deezerdevs-deezer.p.rapidapi.com/search",
		params: { q: query, limit: 8 },
	})
		.then((response) => {
			const { error, data } = response.data;
			return dispatch({
				type: ActionType_Home.collection.GET_COLLECTION,
				payload: { query, data, error },
			});
		})
		.then(() => dispatch(setLoadingCollection(query, false)))
		.catch((error) =>
			dispatch({
				type: ActionType_Home.collection.GET_COLLECTION,
				payload: { query, error },
			})
		);
};

export const getTrackChart = () => (
	dispatch: Dispatch<Dispatch_Loading | Action_GetList<TrackDetail>>
) => {
	dispatch(setLoadingTrackChart(true));
	fetcher({
		url: "https://api.deezer.com/chart/tracks/tracks",
		useProxy: true,
		params: {
			limit: 5,
		},
	})
		.then((response) => {
			const { error, data } = response.data;
			dispatch({
				type: ActionType_Home.trackChart.GET_TRACKCHART,
				payload: { data, error },
			});
		})
		.then(() => dispatch(setLoadingTrackChart(false)))
		.catch((error) => {
			dispatch({
				type: ActionType_Home.trackChart.GET_TRACKCHART,
				payload: { error },
			});
		});
};

export const getArtistChart = () => (
	dispatch: Dispatch<Dispatch_Loading | Action_GetList<Artist>>
) => {
	dispatch(setLoadingArtistChart(true));
	fetcher({
		url: "https://api.deezer.com/chart/artists/artists",
		useProxy: true,
		params: { limit: 9 },
	})
		.then((response) => {
			const { error, data } = response.data;
			dispatch({
				type: ActionType_Home.artistChart.GET_ARTISTCHART,
				payload: { data, error },
			});
		})
		.then(() => dispatch(setLoadingArtistChart(false)))
		.catch((error) => {
			dispatch({
				type: ActionType_Home.artistChart.GET_ARTISTCHART,
				payload: { error },
			});
		});
};

export const getWeekChartTracks = () => (
	dispatch: Dispatch<Dispatch_Loading | Action_GetList<TrackDetail>>
) => {
	dispatch(setLoadingWeekChartTracks(true));
	fetcher({
		url: `https://api.deezer.com/chart/tracks/tracks`,
		useProxy: true,
	})
		.then((response) => {
			const { error, data } = response.data;
			return dispatch({
				type: ActionType_Home.weekChart.GET_WEEKCHART_TRACKS,
				payload: { error, data },
			});
		})
		.then(() => dispatch(setLoadingWeekChartTracks(false)))
		.catch((error) => {
			dispatch({
				type: ActionType_Home.weekChart.GET_WEEKCHART_TRACKS,
				payload: { error },
			});
		});
};

export const getWeekChartAlbums = () => (
	dispatch: Dispatch<Dispatch_Loading | Action_GetList<Album>>
) => {
	dispatch(setLoadingWeekChartAlbums(true));
	fetcher({
		url: `https://api.deezer.com/chart/albums/albums`,
		useProxy: true,
	})
		.then((response) => {
			const { error, data } = response.data;
			return dispatch({
				type: ActionType_Home.weekChart.GET_WEEKCHART_ALBUMS,
				payload: { error, data },
			});
		})
		.then(() => dispatch(setLoadingWeekChartAlbums(false)))
		.catch((error) => {
			dispatch({
				type: ActionType_Home.weekChart.GET_WEEKCHART_ALBUMS,
				payload: { error },
			});
		});
};
