import { Artist, Track, TrackDetail, Comment } from "../DataTypes/TrackTypes";
import { EMPTY_ALBUM } from "./Album";

export const EMPTY_ARTIST: Artist = {
	id: 0,
	name: "",
	link: "",
	picture: "",
	picture_big: "",
	tracklist: "",
};

export const EMPTY_TRACK: Track = {
	id: 0,
	title: "",
	title_short: "",
	duration: -1,
	link: "",
	preview: "",
	release_date: "",
	artist: EMPTY_ARTIST,
	type: "track",
};

export const EMPTY_TRACK_DETAIL: TrackDetail = {
	...EMPTY_TRACK,
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
