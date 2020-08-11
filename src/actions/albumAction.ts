// Libs
import { Dispatch } from "react";
// Fetcher
import { fetcher } from "./Fetcher";
// Types
import { Dispatch_Loading } from "@constants/DataTypes/LoadingTypes";
import { Action_GetAlbumDetail } from "@constants/DataTypes/AlbumTypes";
import { ActionType_Album } from "@constants/ActionTypes/AlbumActions";
// Actions
import { setLoadingAlbum } from "./LoadingAction";

export const getAlbumDetail = (id: number) => (
	dispatch: Dispatch<Dispatch_Loading | Action_GetAlbumDetail>
) => {
	dispatch(setLoadingAlbum(true));
	fetcher({ url: "https://deezerdevs-deezer.p.rapidapi.com/album/" + id })
		.then((response) => {
			const { error } = response.data;
			let data;
			if (error) data = undefined;
			else data = response.data;
			dispatch({
				type: ActionType_Album.GET_ALBUM_DETAIL,
				payload: { data, error },
			});
		})
		.then(() => dispatch(setLoadingAlbum(false)))
		.catch((error) =>
			dispatch({
				type: ActionType_Album.GET_ALBUM_DETAIL,
				payload: { error },
			})
		);
};
