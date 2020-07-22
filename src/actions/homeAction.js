import { homeActionTypes } from "./types";
import axios from "axios";

export const getSuggestList = (type) => (dispatch) => {
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
			q: type === "hot" ? "aimyon" : "yonezu kenshi",
			limit: 10,
		},
	})
		.then((response) => {
			if (response.status === 200) {
				dispatch({
					type:
						type === "hot"
							? homeActionTypes.suggest.GET_HOT
							: homeActionTypes.suggest.GET_NEW,
					payload: response.data.data,
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

export const getChart = (top3Query, top5Query) => (dispatch) => {
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
			q: top3Query,
			limit: 3,
		},
	})
		.then((response) => {
			if (response.status === 200) {
				dispatch({
					type: homeActionTypes.chart.GET_CHART_TOP3,
					payload: response.data.data,
				});
			}
		})
		.catch((error) => {
			console.log(error);
		});

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
			q: top5Query,
			limit: 5,
		},
	})
		.then((response) => {
			if (response.status === 200) {
				dispatch({
					type: homeActionTypes.chart.GET_CHART_TOP5,
					payload: response.data.data,
				});
			}
		})
		.catch((error) => {
			console.log(error);
		});
};

export const getWeekChart = (query, limit) => (dispatch) => {
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
					type: homeActionTypes.weekChart.GET_WEEK_CHART,
					payload: { query, data: response.data.data },
				});
			}
		})
		.catch((error) => {
			console.log(error);
		});
};
