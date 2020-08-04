import { Singer, SongInAlbum } from "./songDetailTypes";

export const albumActionTypes = {
	GET_ALBUM_DETAIL: "GET_ALBUM_DETAIL",
	GET_ALBUM_TRACK: "GET_ALBUM_TRACK",
	SET_LOADING_ALBUM: "SET_LOADING_ALBUM",
};
export interface Album {
	id: number;
	title: string;
	artist: Singer;
	cover: string;
	cover_small: string;
	cover_medium: string;
	cover_big: string;
	release_date: string;
	type: "album";
}

export interface AlbumDetail extends Album {
	tracks: {
		data: SongInAlbum[];
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
