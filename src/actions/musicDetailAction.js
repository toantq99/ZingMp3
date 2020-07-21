import types from "./types";
import axios from "axios";

export const getSongDetail = (id) => (dispatch) => {
	axios({
		method: "GET",
		url: `https://deezerdevs-deezer.p.rapidapi.com/track/${id}`,
		headers: {
			"content-type": "application/octet-stream",
			"x-rapidapi-host": "deezerdevs-deezer.p.rapidapi.com",
			"x-rapidapi-key": "3319f523f7msh49e3d6c5c3ee4b4p19f9fajsn66e90ad6334c",
			useQueryString: true,
		},
	})
		.then((response) => {
			if (response.status === 200) {
				dispatch({
					type: types.GET_MUSIC_DETAIL,
					payload: response.data,
				});
				dispatch(getSimilarSong(response.data));
				dispatch(getComments(response.data));
			}
		})
		.catch((error) => {
			console.log(error);
		});
};

export const getSimilarSong = (song) => (dispatch) => {
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
			q: `${song.artist.name}`,
			limit: 10,
		},
	})
		.then((response) => {
			if (response.status === 200) {
				dispatch({
					type: types.GET_SIMILAR_SONG,
					payload: response.data.data,
				});
			}
		})
		.catch((error) => {
			console.log(error);
		});
};

export const getComments = (song) => (dispatch) => {
	setTimeout(() => {
		dispatch({
			type: types.GET_COMMENTS,
			payload: [
				{
					author: {
						id: "2529",
						name: "dadbond",
						link: "https://www.deezer.com/profile/2529",
						picture: "https://api.deezer.com/user/2529/image",
					},
					text:
						"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur",
					date: 1379433962,
				},
				{
					author: {
						id: "2529",
						name: "dadbond",
						link: "https://www.deezer.com/profile/2529",
						picture: "https://api.deezer.com/user/2529/image",
					},
					text:
						"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur",
					date: 1379433962,
				},
				{
					author: {
						id: "2529",
						name: "dadbond",
						link: "https://www.deezer.com/profile/2529",
						picture: "https://api.deezer.com/user/2529/image",
					},
					text:
						"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur",
					date: 1379433962,
				},
			],
		});
	}, 2000);
};
