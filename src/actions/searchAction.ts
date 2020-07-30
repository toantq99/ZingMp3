import axios from "axios";
import { Dispatch } from "react";
import {
	searchActionTypes,
	SearchAction,
} from "../constants/types/searchTypes";
import { setLoadingSearch } from "./loadingAction";
import { LoadingDispatchAction } from "../constants/types/loadingTypes";

export const searchSong = (query: string, page: number, pageSize: number) => (
	dispatch: Dispatch<SearchAction | LoadingDispatchAction>
) => {
	dispatch(setLoadingSearch(true));
	axios({
		method: "GET",
		url: "https://deezerdevs-deezer.p.rapidapi.com/search",
		headers: {
			"content-type": "application/octet-stream",
			"x-rapidapi-host": "deezerdevs-deezer.p.rapidapi.com",
			"x-rapidapi-key": "3319f523f7msh49e3d6c5c3ee4b4p19f9fajsn66e90ad6334c",
			useQueryString: true,
		},
		params: {
			q: query,
			limit: pageSize,
			index: (page - 1) * pageSize,
		},
	})
		.then((response) => {
			if (response.status === 200) {
				dispatch({
					type: searchActionTypes.SEARCH_SONG,
					payload: response.data,
				});
				dispatch(setLoadingSearch(false));
			}
		})
		.catch((error) => {
			console.log(error);
		});
};

export const emptySearch = () => (dispatch: Dispatch<{ type: string }>) => {
	dispatch({ type: searchActionTypes.EMPTY_SEARCH });
};
