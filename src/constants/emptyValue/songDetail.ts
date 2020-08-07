import {
	Singer,
	SongDetail,
	Comment,
	SongInAlbum,
} from "../types/songDetailTypes";
import { EMPTY_ALBUM } from "./album";

export const EMPTY_SINGER: Singer = {
	id: 0,
	name: "",
	link: "",
	picture: "",
	picture_big: "",
	tracklist: "",
};

export const EMPTY_SONG_IN_ALBUM: SongInAlbum = {
	id: 0,
	title: "",
	title_short: "",
	duration: -1,
	link: "",
	preview: "",
	release_date: "",
	artist: EMPTY_SINGER,
	type: "track",
};

export const EMPTY_SONG_DETAIL: SongDetail = {
	...EMPTY_SONG_IN_ALBUM,
	album: EMPTY_ALBUM,
};

export const EMPTY_COMMENT: Comment = {
	author: {
		id: 0,
		name: "",
		link: "",
		picture: "",
	},
	text: "",
	date: "",
};
