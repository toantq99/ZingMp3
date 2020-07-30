import { SongDetail, Singer } from "./songDetailTypes";
import { Album } from "./albumTypes";

export const homeActionTypes = {
	suggest: {
		GET_SUGGEST: "GET_SUGGEST",
		SET_LOADING_SUGGEST: "SET_LOADING_SUGGEST",
	},
	collection: {
		GET_COLLECTION: "GET_COLLECTION",
		SET_LOADING_COLLECTION: "SET_LOADING_COLLECTION",
	},
	chart: {
		GET_SONG_CHART: "GET_SONG_CHART",
		SET_LOADING_SONGCHART: "SET_LOADING_SONGCHART",
		GET_ARTIST_CHART: "GET_ARTIST_CHART",
		SET_LOADING_ARTISTCHART: "SET_LOADING_ARTISTCHART",
	},
	weekChart: {
		GET_WEEK_CHART: "GET_WEEK_CHART",
		SET_LOADING_WEEKCHART: "SET_LOADING_WEEKCHART",
	},
};

export type HomeActionWithQuery = {
	type: string;
	payload: {
		query: string;
		data: SongDetail[];
	};
};
export type HomeActionSongChart = {
	type: string;
	payload: SongDetail[];
};
export type HomeActionArtistChart = {
	type: string;
	payload: Singer[];
};
export type HomeActionWeekChart = {
	type: string;
	payload: {
		type: string;
		data: Album[] | SongDetail[];
	};
};
