import { Dispatch } from "react";
import { setLoadingSearch } from "./LoadingAction";
import { fetcher } from "./Fetcher";
import { Action_Search } from "@constants/DataTypes/SearchTypes";
import { Dispatch_Loading } from "@constants/DataTypes/LoadingTypes";
import { ActionType_Search } from "@constants/ActionTypes/SearchActions";

export const searchSong = (query: string, page: number, pageSize: number) => (
	dispatch: Dispatch<Action_Search | Dispatch_Loading>
) => {
	dispatch(setLoadingSearch(true));
	fetcher({
		url: "https://deezerdevs-deezer.p.rapidapi.com/search",
		params: {
			q: query,
			limit: pageSize,
			index: (page - 1) * pageSize,
		},
	})
		.then((response) => {
			const { data, error, total } = response.data;
			dispatch({
				type: ActionType_Search.SEARCH_SONG,
				payload: {
					searchResult: {
						data,
						total,
					},
					error,
				},
			});
		})
		.catch((error) => {
			const res = error.response;
			if (res) {
				dispatch({
					type: ActionType_Search.SEARCH_SONG,
					payload: { error: error.response.data },
				});
			} else {
				dispatch({
					type: ActionType_Search.SEARCH_SONG,
					payload: {
						error: { message: "", type: error.message, code: 400 },
					},
				});
			}
		})
		.finally(() => dispatch(setLoadingSearch(false)));
};

export const emptySearch = () => (dispatch: Dispatch<{ type: string }>) => {
	dispatch({ type: ActionType_Search.EMPTY_SEARCH });
};
