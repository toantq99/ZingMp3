import { TrackDetail } from "./TrackTypes";
import { FetchError } from "./HomeTypes";

export interface Action_Search {
	type: string;
	payload: {
		searchResult?: {
			data: TrackDetail[];
			total: number;
		};
		error?: FetchError;
	};
}
