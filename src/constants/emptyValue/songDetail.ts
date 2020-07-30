import {
	Singer,
	SongDetail,
	Comment,
	SongInAlbum,
} from "../types/songDetailTypes";
import { emptyAlbum } from "./album";

export const emptySinger: Singer = {
	id: "",
	name: "",
	link: "",
	picture: "",
	picture_big: "",
	tracklist: "",
};

export const emptySongInAlbum: SongInAlbum = {
	id: "",
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
		id: "",
		name: "",
		link: "",
		picture: "",
	},
	text: "",
	date: "",
};
