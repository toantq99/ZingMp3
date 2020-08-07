// Libs
import { Dispatch } from "react";
// Types
import { searchActionTypes, SearchAction } from "@constants/types/searchTypes";
import { LoadingDispatchAction } from "@constants/types/loadingTypes";
// Actions
import { setLoadingSearch } from "./loadingAction";
// Fetcher
import { fetcher } from "./fetcher";

export const searchSong = (query: string, page: number, pageSize: number) => (
	dispatch: Dispatch<SearchAction | LoadingDispatchAction>
) => {
	dispatch(setLoadingSearch(true));
	fetcher({
		url: "https://deezerdevs-deezer.p.rapidapi.com/search",
		params: {
			q: query,
			limit: pageSize,
			index: (page - 1) * pageSize,
		},
	}).then((response) => {
		if (response.status === 200) {
			dispatch({
				type: searchActionTypes.SEARCH_SONG,
				payload: response.data,
			});
			dispatch(setLoadingSearch(false));
		}
	});
};

export const emptySearch = () => (dispatch: Dispatch<{ type: string }>) => {
	dispatch({ type: searchActionTypes.EMPTY_SEARCH });
};
