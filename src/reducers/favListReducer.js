import types from "../actions/types";

const initialState = [];

export default (state = initialState, action) => {
	switch (action.type) {
		case types.ADD_FAV:
			return [...state, action.payload];
		case types.REMOVE_FAV:
			return state.filter((id) => id !== action.payload);
		default:
			return state;
	}
};
