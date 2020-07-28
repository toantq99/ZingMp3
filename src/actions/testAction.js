import axios from "axios";

export const testAction1 = (query) => (dispatch) => {
	return axios({
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
	}).then((response) => {
		if (response.status === 200) {
			dispatch({
				type: "TEST1",
				payload: {
					query: query,
					data: response.data.data,
				},
			});
		}
	});
};

const testAction2 = (query, limit) => (dispatch) => {
	return axios({
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
	}).then((response) => {
		if (response.status === 200) {
			dispatch({
				type: "TEST2",
				payload: { query, data: response.data.data },
			});
		}
	});
};

const testAction3 = () => (dispatch) => {
	return axios({
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
			dispatch({
				type: "TEST3",
				payload: response.data.data.slice(0, 5),
			});
		})
		.catch((error) => {
			console.log(error);
		});
};

const testAction4 = () => (dispatch) => {
	return axios({
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
					type: "TEST4",
					payload: response.data.data.slice(0, -1),
				});
			}
		})
		.catch((error) => {
			console.log(error);
		});
};

export const getTestPage = () => (dispatch) => {
	dispatch(testAction3());
	dispatch(testAction4());
};
