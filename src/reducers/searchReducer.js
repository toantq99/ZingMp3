import { searchActionTypes } from "../actions/types";

const initialState = { isLoading: false, data: {} };

export default (state = initialState, action) => {
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
