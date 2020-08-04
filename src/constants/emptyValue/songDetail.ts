import {
	Singer,
	SongDetail,
	Comment,
	SongInAlbum,
} from "../types/songDetailTypes";
import { emptyAlbum } from "./album";

export const emptySinger: Singer = {
	id: 0,
	name: "",
	link: "",
	picture: "",
	picture_big: "",
	tracklist: "",
};

export const emptySongInAlbum: SongInAlbum = {
	id: 0,
	title: "",
	title_short: "",
	duration: -1,
	link: "",
	preview: "",
	release_date: "",
	artist: emptySinger,
	type: "track",
};

export const emptySongDetail: SongDetail = {
	...emptySongInAlbum,
	album: emptyAlbum,
};

export const emptyComment: Comment = {
	author: {
		id: 0,
		name: "",
		link: "",
		picture: "",
	},
	text: "",
	date: "",
};
