import { SongDetail, Singer } from "./songDetailTypes";

export const albumActionTypes = {
	GET_ALBUM_DETAIL: "GET_ALBUM_DETAIL",
	GET_ALBUM_TRACK: "GET_ALBUM_TRACK",
	SET_LOADING_ALBUM: "SET_LOADING_ALBUM",
};
export interface AlbumDetail {
	artist: Singer;
	cover: string;
	tracks: {
		data: SongDetail[];
	};
}
export interface AlbumAction {
	type: string;
	payload: AlbumDetail;
}
export interface AlbumState {
	isLoading: boolean;
	detail: AlbumDetail;
}
