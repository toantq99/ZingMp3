import {
	Action_UpdateFavList,
	Action_GetFavListStorage,
} from "@constants/DataTypes/FavListTypes";
import { FavListState } from "@constants/State";
import { ActionType_FavList } from "@constants/ActionTypes/FavListActions";

const initialState: FavListState = [];

export default (
	state = initialState,
	action: Action_UpdateFavList | Action_GetFavListStorage
) => {
	switch (action.type) {
		case ActionType_FavList.ADD_FAV:
			return [...state, action.payload];
		case ActionType_FavList.REMOVE_FAV:
			return state.filter((id) => id !== action.payload);
		case ActionType_FavList.GET_FAV_STORAGE:
			return action.payload;
		default:
			return state;
	}
};
