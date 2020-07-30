import { SongDetail } from "./songDetailTypes";

export const searchActionTypes = {
	SEARCH_SONG: "SEARCH_SONG",
	SET_LOADING_SEARCH: "SET_LOADING_SEARCH",
	EMPTY_SEARCH: "EMPTY_SEARCH",
};

export type SearchAction = {
	type: string;
	payload: {
		data: SongDetail[];
		total: number;
	};
};
