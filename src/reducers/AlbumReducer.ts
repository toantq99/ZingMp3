import { EMPTY_ALBUM_DETAIL } from "@constants/EmptyValues/Album";
import { AlbumState } from "@constants/State";
import { Action_GetAlbumDetail } from "@constants/DataTypes/AlbumTypes";
import { Action_Loading } from "@constants/DataTypes/LoadingTypes";
import { ActionType_Album } from "@constants/ActionTypes/AlbumActions";

const initialState: AlbumState = {
	isLoading: false,
	data: EMPTY_ALBUM_DETAIL,
};

export default (
	state = initialState,
	action: Action_GetAlbumDetail | Action_Loading
) => {
	switch (action.type) {
		case ActionType_Album.GET_ALBUM_DETAIL:
			return {
				...state,
				data: action.payload.data,
				error: action.payload.error,
			};
		case ActionType_Album.SET_LOADING_ALBUM:
			return { ...state, isLoading: action.payload };
		default:
			return state;
	}
};
