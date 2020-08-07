// Libs
import { Dispatch } from "react";
// Types
import {
	homeActionTypes,
	HomeActionWithQuery,
	HomeActionArtistChart,
	HomeActionWeekChart,
	HomeActionSongChart,
} from "@constants/types/homeTypes";
import { LoadingDispatchAction } from "@constants/types/loadingTypes";
// Actions
import { setLoadingHome } from "./loadingAction";
// Fetcher
import { fetcher } from "./fetcher";

export const getSuggestList = (queryList: string[]) => (
	dispatch: Dispatch<LoadingDispatchAction | HomeActionWithQuery>
) => {
	dispatch(setLoadingHome("suggest", true));
	Promise.all(
		queryList.map(async (query) => {
			const response = await fetcher({
				url: "https://deezerdevs-deezer.p.rapidapi.com/search",
				params: { q: query, limit: 10 },
			});
			return dispatch({
				type: homeActionTypes.suggest.GET_SUGGEST,
				payload: { query, data: response.data.data },
			});
		})
	).then(() => dispatch(setLoadingHome("suggest", false)));
};

export const getCollection = (queryList: string[]) => (
	dispatch: Dispatch<LoadingDispatchAction | HomeActionWithQuery>
) => {
	dispatch(setLoadingHome("collection", true));

	Promise.all(
		queryList.map(async (query) => {
			const response = await fetcher({
				url: "https://deezerdevs-deezer.p.rapidapi.com/search",
				params: {
					q: query,
					limit: 8,
				},
			});
			return dispatch({
				type: homeActionTypes.collection.GET_COLLECTION,
				payload: { query, data: response.data.data },
			});
		})
	).then(() => dispatch(setLoadingHome("collection", false)));
};

export const getSongChart = () => (
	dispatch: Dispatch<HomeActionSongChart | LoadingDispatchAction>
) => {
	dispatch(setLoadingHome("songchart", true));
	fetcher({ url: "https://api.deezer.com/chart/tracks/tracks", useProxy: true })
		.then((response) => {
			dispatch({
				type: homeActionTypes.chart.GET_SONG_CHART,
				payload: response.data.data.slice(0, 5),
			});
			dispatch(setLoadingHome("songchart", false));
		})
		.catch((error) => {
			console.log(error);
		});
};

export const getArtistChart = () => (
	dispatch: Dispatch<LoadingDispatchAction | HomeActionArtistChart>
) => {
	dispatch(setLoadingHome("artistchart", true));

	fetcher({ url: "https://api.deezer.com/chart/0/artists", useProxy: true })
		.then((response) => {
			if (response.status === 200) {
				dispatch({
					type: homeActionTypes.chart.GET_ARTIST_CHART,
					payload: response.data.data.slice(0, -1),
				});
				dispatch(setLoadingHome("artistchart", false));
			}
		})
		.catch((error) => {
			console.log(error);
		});
};

export const getWeekChart = (typeList: string[]) => (
	dispatch: Dispatch<LoadingDispatchAction | HomeActionWeekChart>
) => {
	dispatch(setLoadingHome("weekchart", true));

	Promise.all(
		typeList.map(async (type) => {
			const response = await fetcher({
				url: `https://api.deezer.com/chart/${type}/${type}`,
				useProxy: true,
			});
			return dispatch({
				type: homeActionTypes.weekChart.GET_WEEK_CHART,
				payload: { type, data: response.data.data },
			});
		})
	).then(() => dispatch(setLoadingHome("weekchart", false)));
};
