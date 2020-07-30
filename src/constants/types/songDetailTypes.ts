import { Album } from "./albumTypes";

export const detailActionTypes = {
	GET_SONG_DETAIL: "GET_SONG_DETAIL",
	SET_LOADING_SONG_DETAIL: "SET_LOADING_SONG_DETAIL",
	GET_SIMILAR_SONG: "GET_SIMILAR_SONG",
	SET_LOADING_SIMILAR: "SET_LOADING_SIMILAR",
	GET_COMMENTS: "GET_COMMENTS",
	SET_LOADING_COMMENTS: "SET_LOADING_COMMENTS",
	EMPTY_DETAIL: "EMPTY_DETAIL",
};

export type Singer = {
	id: string;
	name: string;
	link: string;
	picture: string;
	picture_big: string;
	tracklist: string;
};

export interface SongInAlbum {
	id: string;
	title: string;
	title_short: string;
	duration: number;
	link: string;
	artist: Singer;
	preview: string;
	release_date: string;
	type: "track";
}

export interface SongDetail extends SongInAlbum {
	album: Album;
}

export type Comment = {
	author: {
		id: string;
		name: string;
		link: string;
		picture: string;
	};
	text: string;
	date: string;
};

interface Action {
	type: string;
}
export interface EmptyAction extends Action {
	payload: null;
}
export interface SongDetailAction extends Action {
	payload: SongDetail;
}
export interface CommentAction extends Action {
	payload: Comment[];
}
export interface SimilarSongAction extends Action {
	payload: SongDetail[];
}
