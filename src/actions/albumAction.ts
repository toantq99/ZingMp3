// Libs
import { Dispatch } from "react";
// Types
import { albumActionTypes, AlbumAction } from "@constants/types/albumTypes";
import { LoadingDispatchAction } from "@constants/types/loadingTypes";
// Actions
import { setLoadingAlbum } from "./loadingAction";
// Fetcher
import { fetcher } from "./fetcher";

export const getAlbumDetail = (id: number) => (
	dispatch: Dispatch<AlbumAction | LoadingDispatchAction>
) => {
	dispatch(setLoadingAlbum(true));
	fetcher({ url: "https://deezerdevs-deezer.p.rapidapi.com/album/" + id })
		.then((response) => {
			if (response.status === 200) {
				dispatch({
					type: albumActionTypes.GET_ALBUM_DETAIL,
					payload: response.data,
				});
			}
		})
		.then(() => dispatch(setLoadingAlbum(false)));
};
