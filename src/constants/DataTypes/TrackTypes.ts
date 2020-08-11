import { Album } from "./AlbumTypes";
import { FetchResultDetail, FetchResult } from "./HomeTypes";

export interface Artist {
	id: number;
	name: string;
	link: string;
	picture: string;
	picture_big: string;
	tracklist: string;
}

export interface Track {
	id: number;
	title: string;
	title_short: string;
	duration: number;
	link: string;
	artist: Artist;
	preview: string;
	release_date: string;
	type: "track";
}

export interface TrackDetail extends Track {
	album: Album;
}

export type Comment = {
	author: {
		id: number;
		name: string;
		link: string;
		picture: string;
	};
	text: string;
	date: string;
};

export interface Action_Empty {
	type: string;
	payload: null;
}
export interface Action_GetTrackDetail {
	type: string;
	payload: FetchResultDetail<TrackDetail>;
}
export interface Action_GetComments {
	type: string;
	payload: FetchResult<Comment>;
}
export interface Action_GetSimilar {
	type: string;
	payload: FetchResult<TrackDetail>;
}
