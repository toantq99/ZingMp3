import { searchActionTypes } from "./types";
import axios from "axios";

export const searchSong = (query, page, pageSize) => (dispatch) => {
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
			console.log(response.data);
			if (response.status === 200) {
				dispatch({
					type: searchActionTypes.SEARCH_SONG,
					payload: response.data,
				});
			}
		})
		.catch((error) => {
			console.log(error);
		});
};

export const emptySearch = () => (dispatch) => {
	dispatch({ type: searchActionTypes.EMPTY_SEARCH });
};
