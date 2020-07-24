import { homeActionTypes } from "./types";
import axios from "axios";

export const getSuggestList = (query) => (dispatch) => {
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
			limit: 10,
		},
	})
		.then((response) => {
			if (response.status === 200) {
				dispatch({
					type: homeActionTypes.suggest.GET_SUGGEST,
					payload: {
						query: query,
						data: response.data.data,
					},
				});
			}
		})
		.catch((error) => {
			console.log(error);
		});
};

export const getCollection = (query, limit) => (dispatch) => {
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
			limit: limit,
		},
	})
		.then((response) => {
			if (response.status === 200) {
				dispatch({
					type: homeActionTypes.collection.GET_COLLECTION,
					payload: { query, data: response.data.data },
				});
			}
		})
		.catch((error) => {
			console.log(error);
		});
};

export const getSongChart = () => (dispatch) => {
	axios({
		method: "GET",
		url:
			"https://cors-anywhere.herokuapp.com/https://api.deezer.com/chart/tracks/tracks",
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
					type: homeActionTypes.chart.GET_SONG_CHART,
					payload: response.data.data.slice(0, 5),
				});
			}
		})
		.catch((error) => {
			console.log(error);
		});
};

export const getArtistChart = () => (dispatch) => {
	axios({
		method: "GET",
		url:
			"https://cors-anywhere.herokuapp.com/https://api.deezer.com/chart/0/artists",
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
					type: homeActionTypes.chart.GET_ARTIST_CHART,
					payload: response.data.data.slice(0, -1),
				});
			}
		})
		.catch((error) => {
			console.log(error);
		});
};

export const getWeekChart = (type, limit) => (dispatch) => {
	axios({
		method: "GET",
		url: `https://cors-anywhere.herokuapp.com/https://api.deezer.com/chart/${type}/${type}`,
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
					type: homeActionTypes.weekChart.GET_WEEK_CHART,
					payload: {
						name: type,
						data: response.data.data.slice(0, limit),
					},
				});
			}
		})
		.catch((error) => {
			console.log(error);
		});
};
