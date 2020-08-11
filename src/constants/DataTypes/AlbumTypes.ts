import { Artist, Track } from "./TrackTypes";

export interface Album {
	id: number;
	title: string;
	artist: Artist;
	cover: string;
	cover_small: string;
	cover_medium: string;
	cover_big: string;
	release_date: string;
	type: "album";
}

export interface AlbumDetail extends Album {
	tracks: {
		data: Track[];
	};
}

export interface Action_GetAlbumDetail {
	type: string;
	payload: any;
}
