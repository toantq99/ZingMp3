import types from "../actions/types";

const initialState = {};

export default (state = initialState, action) => {
	switch (action.type) {
		case types.GET_MUSIC_LIST:
			return action.payload;
		default:
			return state;
	}
};
