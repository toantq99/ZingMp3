import { Album, AlbumDetail } from "../types/albumTypes";

export const emptyAlbum: Album = {
	id: "",
	title: "",
	artist: {
		id: "",
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

export const emptyAlbumDetail: AlbumDetail = {
	...emptyAlbum,
	tracks: {
		data: [],
	},
};
