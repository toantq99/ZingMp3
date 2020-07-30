import {
	searchActionTypes,
	SearchAction,
} from "../constants/types/searchTypes";
import { SearchState } from "../constants/state";
import { LoadingAction } from "../constants/types/loadingTypes";

const initialState: SearchState = {
	isLoading: false,
	data: {
		data: [],
		total: -1,
	},
};

export default (state = initialState, action: SearchAction | LoadingAction) => {
	switch (action.type) {
		case searchActionTypes.SEARCH_SONG:
			return { ...state, data: action.payload };
		case searchActionTypes.SET_LOADING_SEARCH:
			return { ...state, isLoading: action.payload };
		case searchActionTypes.EMPTY_SEARCH:
			return initialState;
		default:
			return state;
	}
};
