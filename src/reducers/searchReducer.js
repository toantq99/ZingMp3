import { searchActionTypes } from "../actions/types";

const initialState = { data: null };

export default (state = initialState, action) => {
	switch (action.type) {
		case searchActionTypes.SEARCH_SONG:
			return action.payload;
		case searchActionTypes.EMPTY_SEARCH:
			return initialState;
		default:
			return state;
	}
};
