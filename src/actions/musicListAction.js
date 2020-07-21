import types from "./types";
import axios from "axios";

export const getMusicList = (text) => (dispatch) => {
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
			q: `${text}`,
			limit: 10,
		},
	})
		.then((response) => {
			if (response.status === 200) {
				dispatch({
					type: types.GET_MUSIC_LIST,
					payload: response.data.data,
				});
			}
		})
		.catch((error) => {
			console.log(error);
		});
};
