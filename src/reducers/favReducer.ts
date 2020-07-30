import { favActionTypes, FavListAction } from "../constants/types/favListTypes";
import { FavListState } from "../constants/state";

const initialState: FavListState = [];

export default (state = initialState, action: FavListAction) => {
	switch (action.type) {
		case favActionTypes.ADD_FAV:
			return [...state, action.payload];
		case favActionTypes.REMOVE_FAV:
			return state.filter((id) => id !== action.payload);
		default:
			return state;
	}
};
