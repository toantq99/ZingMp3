import { favActionTypes } from "../actions/types";

const initialState = [];

export default (state = initialState, action) => {
	switch (action.type) {
		case favActionTypes.ADD_FAV:
			return [...state, action.payload];
		case favActionTypes.REMOVE_FAV:
			return state.filter((id) => id !== action.payload);
		default:
			return state;
	}
};
