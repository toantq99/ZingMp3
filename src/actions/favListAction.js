import { favActionTypes } from "./types";
import { notification } from "antd";
import axios from "axios";

export const addFav = (song) => (dispatch) => {
	dispatch({
		type: favActionTypes.ADD_FAV,
		payload: song.id,
	});
	openSuccessNoti(song);
};

export const removeFav = (song) => (dispatch) => {
	dispatch({
		type: favActionTypes.REMOVE_FAV,
		payload: song.id,
	});
	openErrorNoti(song);
};

export const getFullFavList = (list) => {
	const promises = list.map((id) => {
		return axios({
			method: "GET",
			url: `https://deezerdevs-deezer.p.rapidapi.com/track/${id}`,
			headers: {
				"content-type": "application/octet-stream",
				"x-rapidapi-host": "deezerdevs-deezer.p.rapidapi.com",
				"x-rapidapi-key": "3319f523f7msh49e3d6c5c3ee4b4p19f9fajsn66e90ad6334c",
				useQueryString: true,
			},
		}).then((res) => {
			if (res.status === 200) return res.data;
			else return null;
		});
	});
	return Promise.all(promises);
};

export const getFullFavItem = (id) => {
	return axios({
		method: "GET",
		url: `https://deezerdevs-deezer.p.rapidapi.com/track/${id}`,
		headers: {
			"content-type": "application/octet-stream",
			"x-rapidapi-host": "deezerdevs-deezer.p.rapidapi.com",
			"x-rapidapi-key": "3319f523f7msh49e3d6c5c3ee4b4p19f9fajsn66e90ad6334c",
			useQueryString: true,
		},
	})
		.then((res) => {
			if (res.status === 200) return res.data;
			else return null;
		})
		.catch((err) => console.log(err));
};

const openSuccessNoti = (song) => {
	notification["success"]({
		message: "Thêm thành công",
		description: `${song.title} - ${song.artist.name} đã được thêm vào danh sách yêu thích`,
		placement: "topRight",
	});
};
const openErrorNoti = (song) => {
	notification["error"]({
		message: "Xóa thành công",
		description: `${song.title} - ${song.artist.name} đã được xóa khỏi danh sách yêu thích`,
		placement: "topRight",
	});
};
