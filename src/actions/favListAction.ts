// Libs
import { Dispatch } from "react";
// Fetcher
import { fetcher } from "./Fetcher";
import { notification } from "antd";
import { TrackDetail, Track } from "@constants/DataTypes/TrackTypes";
import {
	Action_UpdateFavList,
	Action_GetFavListStorage,
	FavList,
	FavItem,
} from "@constants/DataTypes/FavListTypes";
import { ActionType_FavList } from "@constants/ActionTypes/FavListActions";
import { EMPTY_TRACK_DETAIL } from "@constants/EmptyValues/Track";

export const addFav = (song: Track | TrackDetail) => (
	dispatch: Dispatch<Action_UpdateFavList>
) => {
	dispatch({
		type: ActionType_FavList.ADD_FAV,
		payload: song.id,
	});
	const list = getListFromStorage();
	if (list.length > 0) {
		list.push(song.id);
		localStorage.setItem("favList", list.join("."));
	} else {
		localStorage.setItem("favList", song.id.toString());
	}
	openSuccessNoti(song);
};

export const removeFav = (song: Track | TrackDetail) => (
	dispatch: Dispatch<Action_UpdateFavList>
) => {
	dispatch({
		type: ActionType_FavList.REMOVE_FAV,
		payload: song.id,
	});
	const list = getListFromStorage();
	if (list.length > 0) {
		localStorage.setItem(
			"favList",
			list.filter((item) => item !== song.id).join(".")
		);
	}
	openErrorNoti(song);
};

export const getListFromStorage = () => {
	const list = localStorage.getItem("favList");
	if (list === null || list.trim().length === 0) {
		return [];
	} else {
		return list
			.trim()
			.split(".")
			.map((item) => parseInt(item));
	}
};

export const dispatchListFromStorage = () => (
	dispatch: Dispatch<Action_GetFavListStorage>
) => {
	dispatch({
		type: ActionType_FavList.GET_FAV_STORAGE,
		payload: getListFromStorage(),
	});
};

export const getFullFavList = (list: FavList) => {
	const promises = list.map((id) => {
		return fetcher({
			url: `https://deezerdevs-deezer.p.rapidapi.com/track/${id}`,
		}).then((res) => {
			if (res.status === 200) return res.data;
			else return null;
		});
	});
	return Promise.all(promises);
};

export const getFullFavItem = (id: FavItem) => {
	return fetcher({
		url: `https://deezerdevs-deezer.p.rapidapi.com/track/${id}`,
	})
		.then((res) => {
			console.log(res);
			const { error } = res.data;
			if (error) {
				return {
					data: {
						...EMPTY_TRACK_DETAIL,
						id,
					},
					error,
				};
			} else return { data: res.data };
		})
		.catch((err) => {
			console.log(err);
			return {
				data: {
					...EMPTY_TRACK_DETAIL,
					id,
				},
				error: err,
			};
		});
};

const openSuccessNoti = (track: Track) => {
	notification["success"]({
		message: "Thêm thành công",
		description: `${track.title} - ${track.artist.name} đã được thêm vào danh sách yêu thích`,
		placement: "topRight",
	});
};
const openErrorNoti = (track: Track) => {
	notification["error"]({
		message: "Xóa thành công",
		description: `${track.title} - ${track.artist.name} đã được xóa khỏi danh sách yêu thích`,
		placement: "topRight",
	});
};
