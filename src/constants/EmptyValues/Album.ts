import { Album, AlbumDetail } from "../DataTypes/AlbumTypes";

export const EMPTY_ALBUM: Album = {
	id: 0,
	title: "",
	artist: {
		id: 0,
		name: "",
		link: "",
		picture: "",
		picture_big: "",
		tracklist: "",
	},
	cover: "",
	cover_small: "",
	cover_medium: "",
	cover_big: "",
	release_date: "",
	type: "album",
};

export const EMPTY_ALBUM_DETAIL: AlbumDetail = {
	...EMPTY_ALBUM,
	tracks: {
		data: [],
	},
};
