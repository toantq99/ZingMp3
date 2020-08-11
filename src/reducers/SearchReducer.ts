import { SearchState } from "@constants/State";
import { ActionType_Search } from "@constants/ActionTypes/SearchActions";

const initialState: SearchState = {
	isLoading: false,
	searchResult: {
		data: [],
		total: -1,
	},
};

export default (state = initialState, action: any) => {
	switch (action.type) {
		case ActionType_Search.SEARCH_SONG:
			return {
				...state,
				searchResult: action.payload.searchResult,
				error: action.payload.error,
			};
		case ActionType_Search.SET_LOADING_SEARCH:
			return { ...state, isLoading: action.payload };
		case ActionType_Search.EMPTY_SEARCH:
			return initialState;
		default:
			return state;
	}
};
